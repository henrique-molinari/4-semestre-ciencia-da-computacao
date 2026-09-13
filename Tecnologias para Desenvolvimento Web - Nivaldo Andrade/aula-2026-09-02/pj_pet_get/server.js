require('dotenv').config();

// Requere o express
const express = require('express')

//instancia do express
const api = express()

// Requere o cors
const cors = require('cors')

//Requere a conexão
const conn = require('./db/conn')

//Requerer models
const User = require('./models/Users')

// CORREÇÃO: Importa o arquivo de rotas (ajuste o caminho se sua pasta tiver outro nome)
const userRoutes = require('./routes/userRoutes')

// Configurando JSON response - Para ler e devolver um JSON
api.use(express.json())

// salve Cors
api.use(cors({ credential: true, origin: 'http://localhost:5000' }))
api.use('/users', userRoutes)

conn.sync()
    .then(() => { api.listen(5000) }) // Nota: Sua API vai rodar na porta 3030
    .catch(error => { console.info(error) })


