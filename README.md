# 4º Semestre — Ciência da Computação

Repositório central do quarto semestre da graduação em Ciência da
Computação. Reúne, organizado por disciplina e por aula, todo o material
produzido em sala: exercícios, projetos práticos, anotações de aula e
entregas avaliativas.

**Autor:** Henrique Molinari

---

## Sobre este repositório

O objetivo é manter um histórico completo e bem estruturado de todo o
semestre, servindo tanto como portfólio quanto como material de consulta
para revisão de conteúdo. Cada disciplina tem sua própria pasta, e cada
aula é versionada individualmente à medida que o conteúdo é ministrado.

## Disciplinas

| Disciplina | Professor(a) | Foco |
|---|---|---|
| [Integração de Dados](<./Integração de Dados - MAX VALLIM>) | Max Vallim | Python, pandas, SQLite, TinyDB e ETL de dados em CSV/JSON |
| [Tecnologias para Desenvolvimento Web](<./Tecnologias para Desenvolvimento Web - Nivaldo Andrade>) | Nivaldo Andrade | Node.js, Express, APIs REST, autenticação |
| [Computação em Nuvem](<./Computação em Nuvem - Rodrigo Marudi>) | Rodrigo Marudi | Modelos de serviço, tipos de nuvem, redes e virtualização |
| [Desenvolvimento de Interfaces de Usuário para Web](<./Desenvolvimento de Interfaces de Usuário para Web - Marcelo Ciacco>) | Marcelo Ciacco | HTML, CSS e JavaScript |

Cada pasta de disciplina contém um README com a lista de aulas e um resumo
do conteúdo. Cada pasta de aula contém, por sua vez, um README descrevendo
o que há ali e, quando aplicável, um arquivo `anotacoes-de-aula.md` com as
anotações feitas durante a aula.

## Estrutura

```
4° Semestre/
├── Integração de Dados - MAX VALLIM/
│   ├── README.md
│   └── aula-2026-08-10/
│       ├── README.md
│       └── ...
├── Tecnologias para Desenvolvimento Web - Nivaldo Andrade/
├── Computação em Nuvem - Rodrigo Marudi/
├── Desenvolvimento de Interfaces de Usuário para Web - Marcelo Ciacco/
├── ARQUIVOS_GRANDES.txt
├── .gitignore
└── README.md
```

## Convenções

- **Nomenclatura das aulas:** `aula-AAAA-MM-DD`, sempre com a data em que a
  aula foi ministrada, mantendo a ordem cronológica.
- **README por aula:** descreve objetivamente o conteúdo da pasta (o que
  é cada arquivo). Anotações pessoais de aula, quando existem, ficam à
  parte em `anotacoes-de-aula.md`.
- **Commits:** um commit por aula adicionada (ou por atualização
  relevante), com mensagem indicando a disciplina e o conteúdo. Exemplo:

  ```
  git commit -m "Integração de Dados: aula 2026-09-14 - joins com pandas"
  ```

- **Arquivos ignorados:** dependências (`node_modules/`), variáveis de
  ambiente (`.env`) e ambientes virtuais Python não são versionados.

## Arquivos grandes

Alguns exercícios geram bancos de dados (`.db`) e CSVs de dezenas de
megabytes. Para manter o repositório leve, esses arquivos não são
versionados; a lista completa está em [ARQUIVOS_GRANDES.txt](./ARQUIVOS_GRANDES.txt)
e uma cópia integral fica disponível no Google Drive, linkada no README
da disciplina correspondente.

## Como adicionar uma nova aula

1. Crie a pasta `aula-AAAA-MM-DD` dentro da disciplina correspondente.
2. Adicione os arquivos da aula e um README descrevendo o conteúdo.
3. Se o exercício usar Node.js ou Python com dependências, confirme que
   `node_modules/`, `.env` e ambientes virtuais não serão commitados (o
   `.gitignore` da raiz já cobre esses casos).
4. Commit e push:

   ```bash
   git add "Nome da Disciplina - Professor/aula-AAAA-MM-DD"
   git commit -m "Disciplina: aula AAAA-MM-DD - resumo do conteúdo"
   git push
   ```

## Tecnologias utilizadas ao longo do semestre

Python · pandas · SQLite · TinyDB · Power BI · PostgreSQL · Apache Hop ·
Node.js · Express · MongoDB · JWT · HTML5 · CSS3 · JavaScript

## Licença

Uso educacional. Conteúdo produzido para fins acadêmicos ao longo do
curso de Ciência da Computação.
