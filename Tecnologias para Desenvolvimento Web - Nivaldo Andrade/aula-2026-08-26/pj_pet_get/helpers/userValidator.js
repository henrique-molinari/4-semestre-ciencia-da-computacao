//Requerer as bibliotecas do Validator
const { body, validationResult } = require('express-validator');

//Regras de Validações
const registerValidationRules = () => {
    return [
        body('name').notEmpty().withMessage('O nome é obrigatório'),
        body('email').notEmpty().withMessage('O email é obrigatório e deve se válido'),
        body('password').notEmpty().withMessage('A senha é obrigatória'),
        body('phone').notEmpty().withMessage('O telefone é obrigatório e deve se válido'),
    ]
};

//Validações
const validate = (req, res, next) => {
    const erros = validationResult(req)
    if (erros.isEmpty()) {
        return next()
    }
    //Retornar o primeiro erro encontrado
    return res.status(422).json({
        message: erros.array()[0].msg
    })
};

module.exports = {
    registerValidationRules,
    validate
}