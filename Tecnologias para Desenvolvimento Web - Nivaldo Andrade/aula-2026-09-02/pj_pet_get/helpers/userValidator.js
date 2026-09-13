// requerer as bibliotecas do validator
const { body, validationResult } = require('express-validator')

//Regras de Validações
const registerValidationRules = () => {
    return [
        body('name').notEmpty().withMessage('O nome é Obrigatório'),
        body('email').notEmpty().withMessage('O E-email é obrigatório e deve ser válido'),
        body('password').notEmpty().withMessage('A senha é Obrigatória'),
        body('phone').notEmpty().withMessage('O telefone é Obrigatório'),
    ]
}

//Validação
const validate = (req, res, next) => {
    const errors = validationResult(req)
    if(errors.isEmpty()){
        return next()
    }
    //Retornar o primeiro erro encontrado
    return res.status(422).json({message: errors.array()[0].msg})
}

module.exports = {
    registerValidationRules,
    validate
}