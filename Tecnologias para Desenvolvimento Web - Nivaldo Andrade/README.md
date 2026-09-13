# Tecnologias para Desenvolvimento Web

**Professor:** Nivaldo Andrade

Disciplina de desenvolvimento back-end com Node.js: estrutura MVC, criação
de APIs REST, conexão com banco de dados e autenticação.

## Aulas

| Aula | Conteúdo |
|---|---|
| [aula-2026-08-12](./aula-2026-08-12) | Estrutura padrão de projeto MVC em Node.js/Express |
| [aula-2026-08-19](./aula-2026-08-19) | Projeto `pj_pet_get`: estrutura inicial, conexão com banco e models |
| [aula-2026-08-26](./aula-2026-08-26) | `pj_pet_get`: controllers, validação de usuário e rotas |
| [aula-2026-09-02](./aula-2026-09-02) | `pj_pet_get`: autenticação com token e refino das rotas de usuário |

## Tecnologias

- Node.js / Express
- MongoDB
- JWT (autenticação por token)

## Observações

Cada aula tem sua própria pasta `node_modules/` gerada localmente via
`npm install` (não versionada — veja o `.gitignore` da raiz). Para rodar um
projeto de alguma aula:

```bash
cd "aula-AAAA-MM-DD"
npm install
npm start
```

Os arquivos `.env` de cada aula não são versionados; crie o seu localmente
com as variáveis necessárias (ex.: `CHAVETOKEN`).
