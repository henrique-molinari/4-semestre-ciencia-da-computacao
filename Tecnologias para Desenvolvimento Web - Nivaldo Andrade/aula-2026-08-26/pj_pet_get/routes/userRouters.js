//Requerer a biblioteca ROUTER do EXPRESS
const router = require('express').Router();

//Requerer o Controller no UserController
const UserController = require('../controllers/userController');

//Requerer as validações
const { registerValidationRules, validate } = require('../helpers/userValidator');

//Rotas
//Registrar
router.post('/register', registerValidationRules(), validate, UserController.register);
//Listar todos
router.get('/', UserController.listall)

module.exports = router;