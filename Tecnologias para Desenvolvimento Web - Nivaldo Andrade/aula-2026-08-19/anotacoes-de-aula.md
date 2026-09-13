# aula19082026

Projeto cadastro de pets 


Gestão de dados:

- Gestão de usuários
- Gestão de pets

Inicio:

utilizar "npm init -y" dentro do terminal

dentro de package.json

alterar
"main": "index.js", 
para
"main": "server.js", 

Rodar este comando

 npm i --save express nodemon cors sequelize mysql2

 "express" -> Esta é a biblioteca principal para manipulação do servidor

 "nodemon" -> Atualiza o servidor em tempo real

 "cors" -> Dar permissão de acesso para o front acessar a api

 "sequelize mysql2" -> O Sequelize é o ORM (Object-Relational Mapping) que gerencia o banco de dados via JavaScript 
 
 "mysql2" -> É o driver de conexão para bancos MySQL.


 Dentro de package.json adicione essa linha:

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon ./server.js localhost 500" // adicione esta
  },