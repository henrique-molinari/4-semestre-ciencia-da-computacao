## aula14082026

## Anotações:

<Tag> = Rótulo

Servidor: "Serve alguma coisa"
- Serviço de email
- Serviço de web
- Serviço de banco de daods
- Serviço de email
- Serviço de armazenamento

Servidores trabalham com porta para acessar esses serviços
- Web: Usa porta 80
- DNS transforma nome em IP

Comunicação basica funciona desta forma:

Cliente (utilizando disp movel) comunica com Provedor (servidor)

Toda e qualquer comunicação em WEB funciona com: requisição e resposta

Browser - Navegador é um interpretador 

Software manda requisição via protocolo HTTP (protocolo de tranferencia de hiper texto) 


BAck end comunicando com o banco separado do front end

React pode ser renderizado tanto no cliente quanto no servidor

## Revisar:

SMTP - relembrar protocolo
IFTP - relembrar protocolo
FTP -  relembrar protocolo

# 📝 Aula 01 (14/08/2026) — Desenvolvimento de Interfaces Web

Anotações organizadas e estruturadas da primeira aula da disciplina de **Desenvolvimento de Interfaces Web**.

---

## 📌 Sumário
1. [Conceitos Fundamentais](#1-conceitos-fundamentais)
2. [Arquitetura Cliente-Servidor & Comunicação Web](#2-arquitetura-cliente-servidor--comunicação-web)
3. [Redes e Conectividade](#3-redes-e-conectividade)
4. [Arquitetura de Aplicações & Renderização](#4-arquitetura-de-aplicações--renderização)
5. [Tópicos para Revisão (Protocolos)](#5-tópicos-para-revisão-protocolos)

---

## 1. Conceitos Fundamentais

* **Tags HTML (`<tag>`):** Funcionam como *rótulos* ou *marcadores* utilizados para estruturar, organizar e dar significado ao conteúdo da página web.
* **Navegador (Browser):** Atua como um **interpretador**. Ele recebe os arquivos de código (HTML, CSS, JavaScript) enviados pelo servidor e os converte na interface gráfica visual com a qual o usuário interage.

---

## 2. Arquitetura Cliente-Servidor & Comunicação Web

Toda a comunicação na Web baseia-se no modelo **Requisição e Resposta** (*Request/Response*).

```
+------------------+     1. Requisição (Request HTTP)     +--------------------+
|  Cliente (Browser) | -----------------------------------> | Servidor (Provedor) |
| (PC/Dispositivo) | <----------------------------------- |   (Hospedagem)     |
+------------------+     2. Resposta (Response HTML/JS)   +--------------------+
```

* **Cliente:** Dispositivo final (computador, smartphone, tablet) executando um navegador que solicita páginas ou dados.
* **Servidor (*Server*):** Computador ou software dedicado a *"servir"* recursos e funcionalidades para os clientes.
  * *Exemplos de serviços:* Servidor Web, Servidor de E-mail, Servidor de Banco de Dados, Servidor de Armazenamento (*Storage*).
* **HTTP (*HyperText Transfer Protocol*):** Protocolo de transferência de hipertexto que estabelece as regras para a troca de mensagens (requisições e respostas) entre o cliente e o servidor.

---

## 3. Redes e Conectividade

* **Portas de Comunicação:** Os servidores utilizam portas lógicas numeradas para identificar e direcionar o tráfego de cada tipo de serviço:
  * **Porta 80:** Porta padrão do protocolo **HTTP** (tráfego web não criptografado).
  * **Porta 443:** Porta padrão do protocolo **HTTPS** (tráfego web seguro com criptografia SSL/TLS).
* **DNS (*Domain Name System*):** Sistema de Nomes de Domínio responsável por traduzir nomes amigáveis (ex: `google.com`) para os endereços IP numéricos que os roteadores e servidores utilizam para se encontrar.

---

## 4. Arquitetura de Aplicações & Renderização

* **Separação Front-end e Back-end:** 
  * **Front-end:** Interface com a qual o usuário interage diretamente (rodando no navegador).
  * **Back-end:** Lógica de negócio, autenticação e comunicação com o Banco de Dados (rodando no servidor).
* **React:** Biblioteca/framework JavaScript que permite construir interfaces dinâmicas. Pode ser renderizado de duas formas:
  * **CSR (*Client-Side Rendering*):** A renderização acontece diretamente no navegador do cliente.
  * **SSR (*Server-Side Rendering*):** A página é pré-renderizada no servidor antes de ser enviada ao cliente.

---

## 5. Tópicos para Revisão (Protocolos)

| Protocolo | Nome Completo | Função Principal |
| :--- | :--- | :--- |
| **SMTP** | *Simple Mail Transfer Protocol* | Envio de e-mails entre servidores ou do cliente para o servidor. |
| **IMAP** *(corrigido)* | *Internet Message Access Protocol* | Leitura e sincronização de e-mails em tempo real sem removê-los do servidor. |
| **FTP** | *File Transfer Protocol* | Transferência de arquivos entre cliente e servidor na rede. |

---

*Anotações criadas durante a aula de Desenvolvimento de Interfaces Web.*
