# Integração de Dados — API ViaCEP + Neon (PostgreSQL) + Apache Hop

Tutorial da aula de **Integração de Dados** (Prof. Max Callil — 14/09/2026).

Este projeto demonstra um fluxo completo de integração de dados: provisionar um banco PostgreSQL na nuvem, cadastrar uma base de clientes, consultar uma API pública de CEP para cada cliente e gravar o endereço retornado em uma tabela relacional, usando o **Apache Hop** como orquestrador do pipeline.

## Sumário

- [Visão geral do fluxo](#visão-geral-do-fluxo)
- [Ferramentas utilizadas](#ferramentas-utilizadas)
- [1. Criar um projeto no Neon](#1-criar-um-projeto-no-neon)
- [2. Obter a string de conexão](#2-obter-a-string-de-conexão)
- [3. Resetar a senha e guardar as credenciais](#3-resetar-a-senha-e-guardar-as-credenciais)
- [4. Criar as tabelas no banco de dados (local, via DBeaver)](#4-criar-as-tabelas-no-banco-de-dados-local-via-dbeaver)
- [5. Popular a tabela de clientes](#5-popular-a-tabela-de-clientes)
- [6. Instalar e abrir o Apache Hop](#6-instalar-e-abrir-o-apache-hop)
- [7. Criar a conexão com o banco de dados no Hop](#7-criar-a-conexão-com-o-banco-de-dados-no-hop)
- [8. Criar o transform "Table input"](#8-criar-o-transform-table-input)
- [9. Conectar o "Table input" ao "REST client"](#9-conectar-o-table-input-ao-rest-client)
- [10. Configurar o "REST client" (API ViaCEP)](#10-configurar-o-rest-client-api-viacep)
- [11. Criar o transform "JSON input"](#11-criar-o-transform-json-input)
- [12. Mapear os campos do JSON retornado](#12-mapear-os-campos-do-json-retornado)
- [13. Criar o "Table output" e mapear os campos](#13-criar-o-table-output-e-mapear-os-campos)
- [14. Ajustar o tamanho da coluna `cep`](#14-ajustar-o-tamanho-da-coluna-cep)
- [15. Executar o pipeline completo](#15-executar-o-pipeline-completo)
- [16. Conferir o resultado no banco de dados](#16-conferir-o-resultado-no-banco-de-dados)
- [Tratamento de erros](#tratamento-de-erros)

## Visão geral do fluxo

```
cliente (nome, cep)
     │
     ▼
Table input  →  URL da API montada por CEP
     │
     ▼
REST client  →  GET https://viacep.com.br/ws/{cep}/json/
     │
     ▼
JSON input   →  extrai logradouro, bairro, localidade, uf
     │
     ▼
Table output →  grava em endereco (id_cliente, cep, logradouro, bairro, cidade, uf)
```

## Ferramentas utilizadas

| Ferramenta | Função |
|---|---|
| [Neon](https://neon.tech) | Banco de dados PostgreSQL serverless na nuvem |
| [DBeaver](https://dbeaver.io) | Cliente SQL local para criar/gerenciar as tabelas |
| [Apache Hop](https://hop.apache.org) | Ferramenta de orquestração/ETL do pipeline |
| [API ViaCEP](https://viacep.com.br) | API pública gratuita de consulta de CEP |

---

## 1. Criar um projeto no Neon

Crie uma conta na plataforma Neon e inicie um novo projeto de banco de dados PostgreSQL. Defina um nome para o projeto e selecione a região mais próxima (ex.: `AWS South America East 1 – São Paulo`).

## 2. Obter a string de conexão

Na tela de conexão do projeto, anote:
- **Branch** (ex.: `production`)
- **Database** (ex.: `neondb`)
- **Role** (ex.: `neondb_owner`)
- **Connection string** completa

## 3. Resetar a senha e guardar as credenciais

Gere uma nova senha para o role do banco e guarde-a com segurança (ou baixe o arquivo `.env`). Guarde também o **host**, que fica entre o `@` e o `.tech` da connection string, por exemplo:

```
ep-calm-fog-xxxxxxxx-pooler.sa-east-1.aws.neon.tech
```

> ⚠️ As credenciais usadas aqui são de um projeto de teste, criado apenas para fins didáticos. Nunca versione senhas reais no repositório — use variáveis de ambiente ou um `.env` (adicionado ao `.gitignore`).

## 4. Criar as tabelas no banco de dados (local, via DBeaver)

O banco em si roda na nuvem (Neon), mas a conexão e a criação das tabelas foram feitas **localmente**, usando o **DBeaver** instalado na máquina:

1. Instale o DBeaver.
2. Crie uma nova conexão PostgreSQL com host, banco, usuário e senha obtidos no passo 2/3.
3. Rode os scripts abaixo para criar as tabelas:

```sql
CREATE TABLE cliente (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  cep VARCHAR(8)
);

CREATE TABLE endereco (
  id SERIAL PRIMARY KEY,
  id_cliente INTEGER,
  cep VARCHAR(8),
  logradouro VARCHAR(200),
  bairro VARCHAR(100),
  cidade VARCHAR(100),
  uf CHAR(2)
);

CREATE TABLE log_erros (
  id SERIAL PRIMARY KEY,
  cep VARCHAR(8),
  motivo VARCHAR(200),
  data_erro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

- `cliente`: dados de origem.
- `endereco`: recebe o resultado da consulta à API.
- `log_erros`: disponível para registrar falhas de integração (ex.: CEP inválido).

## 5. Popular a tabela de clientes

```sql
INSERT INTO cliente (nome, cep)
VALUES
  ('João','01001000'),
  ('Maria','13010000'),
  ('Pedro','20040002'),
  ('Ana','13870000'),
  ('Cliente Inválido','99999999');
```

Confira:

```sql
SELECT * FROM cliente;
```

## 6. Instalar e abrir o Apache Hop

Baixe o Apache Hop, extraia o `.zip` e execute o arquivo `hop-gui` para abrir a aplicação.

## 7. Criar a conexão com o banco de dados no Hop

Crie uma nova pipeline e configure uma conexão relacional **PostgreSQL** com:

| Campo | Valor |
|---|---|
| Username | `neondb_owner` |
| Password | *(senha gerada no passo 3)* |
| Server host name | *(host do Neon)* |
| Port | `5432` |
| Database name | `neondb` |

## 8. Criar o transform "Table input"

Adicione um **Table input** e configure a conexão criada acima. Escreva a query que monta, para cada cliente, a URL de consulta na API ViaCEP:

```sql
SELECT
    id,
    nome,
    cep,
    'https://viacep.com.br/ws/' || cep || '/json/' AS url
FROM cliente
```

Use **Preview** para conferir o resultado.

## 9. Conectar o "Table input" ao "REST client"

Adicione um transform **REST client** e crie um *hop* (seta de ligação) do `Table input` até ele.

## 10. Configurar o "REST client" (API ViaCEP)

- **Accept URL from field**: habilitado
- **URL field name**: `url`
- **HTTP method**: `GET`
- **Result field name**: `response`

## 11. Criar o transform "JSON input"

Conecte o `JSON input` à saída do `REST client`. Na aba **File**, marque a origem como "vinda de um transform anterior" e selecione o campo `response`.

## 12. Mapear os campos do JSON retornado

Na aba **Fields**, extraia do JSON:

| Name | Path |
|---|---|
| `cep_1` | `cep` |
| `logradouro` | `logradouro` |
| `bairro` | `bairro` |
| `localidade` | `localidade` |
| `uf` | `uf` |

> Não preencha a coluna **Type**.

## 13. Criar o "Table output" e mapear os campos

Configure um **Table output** apontando para o schema `public` e a tabela `endereco`, com **Specify database fields** habilitado. Use **Enter field mapping**:

| Campo de origem | Coluna de destino |
|---|---|
| `id` | `id_cliente` |
| `cep_1` | `cep` |
| `logradouro` | `logradouro` |
| `bairro` | `bairro` |
| `localidade` | `cidade` |
| `uf` | `uf` |

## 14. Ajustar o tamanho da coluna `cep`

Alguns CEPs retornados pela API podem vir com hífen, então aumente a coluna antes da carga final:

```sql
ALTER TABLE endereco
ALTER COLUMN cep TYPE varchar(9);
```

## 15. Executar o pipeline completo

Pipeline final: `Table input → REST client → JSON input → Table output`. Execute e acompanhe o log até a mensagem de finalização sem erros.

## 16. Conferir o resultado no banco de dados

```sql
SELECT * FROM endereco;
```

## Tratamento de erros

Clientes com CEP inválido (ex.: `Cliente Inválido` / `99999999`) retornam campos `NULL` em `endereco`, pois a API não encontra o endereço. Em um cenário de produção, esse tipo de falha poderia ser capturado e registrado na tabela `log_erros`, por exemplo tratando o `status` HTTP retornado pelo `REST client` antes do `JSON input`.

---

*Material de apoio da aula de Integração de Dados — uso didático.*
