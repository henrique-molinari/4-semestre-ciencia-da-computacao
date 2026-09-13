// Requere o express
const express = require('express')

//instancia do express
const api = express()

// Requere o cors
const cors = require('cors')

//Requere a conexão
const conn = require('./db/conn')

//Requerer models
const User = require('./models/users')

// Configurando JSON response - Para ler e devolver um JSON
api.use(express.json())

// salve Cors
api.use(cors({ credential: true, origin: 'http://localhost:5000' }))


conn.sync()
    .then(() => { api.listen(5000) })//
    .catch(error => { console.info(error) })
// Start da API
// api.listen(5000, () => {
//     console.log('Servidor Inicializado')
// })