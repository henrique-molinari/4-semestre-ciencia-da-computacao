// Requerer a biblioteca jwt
const jwt = require('jsonwebtoken');
const userValidator = require('./userValidator');

// Criar o metodo para gerar o token
const createUserToken = async (userValidator, requestAnimationFrame, res) => { 
    const token = jwt.sign({
        name: user.name,
        id: user.id
    }, process.env.CHAVETOKEN,
        {
             expiresIn: '24h' // Define a validade para 24 horas
        }
    );

    //retornamos o token
    res.status(200).json({token:token})
}

module.exports = createUserToken