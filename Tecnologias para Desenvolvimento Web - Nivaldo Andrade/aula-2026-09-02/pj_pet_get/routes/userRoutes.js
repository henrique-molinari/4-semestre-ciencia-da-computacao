//requerer a biblioteca router do express
const route = require('express').Router()

const { validationResult } = require('express-validator')
//requerer o controller no UserController
const userController = require('../controllers/userController')
//requerer as validações
const { registerValidationRules, validate } = require('../helpers/userValidator')

//Rotas
//Register
route.post('/register', registerValidationRules(), validate, userController.register)

//Listar todos
route.get('/', userController.listall)

//Rota 
route.post('/login', userController.login)

module.exports = route