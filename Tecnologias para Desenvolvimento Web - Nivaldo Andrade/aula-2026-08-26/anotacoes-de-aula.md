# aula26082026

Métodos HTTP:

- GET: Busca informações do servidor (apenas leitura).
- POST: Cria um novo recurso no servidor.
- PUT: Atualiza um recurso por completo (substitui todo o objeto anterior).
- PATCH: Modifica apenas partes específicas de um recurso existente (sem precisar reenviar todos os dados).
- DELETE: Remove um recurso do servidor.

// npm i express-validator
usado para validação

Middleware:

Um middleware em Node.js é uma função que intercepta a requisição 
HTTP antes que ela chegue na rota final, permitindo modificar dados 
ou controlar o fluxo do sistema.

Como funciona:

- Intercepta: Pega os dados da requisição no meio do caminho.
- Modifica: Adiciona ou altera informações, como dados de autenticação.
- Decide: Deixa o fluxo seguir para a próxima etapa ou bloqueia a requisição.

Criptografia de senha:

- bcrypt
