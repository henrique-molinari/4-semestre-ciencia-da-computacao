//requere o express
const express = require('express');
//instancia do express
const api = express();

//requerer o cors
const cors = require('cors');

//Requerer a conexão com o banco
const conn = require('./db/conn');

//Requer os models
const User = require('./models/Users');

//Requere a rota dos usuarios (user)
const userRoutes = require('./routes/userRouters');

//Configurando JSON response
api.use(express.json());

api.use('/users', userRoutes);

//salve cors
api.use(cors({
    credentials: true,
    origin: 'http://localhost:3030'
}));

//start api
conn.sync()
    .then((() => { api.listen(5000) }))
    .catch(error => { console.info(error) });