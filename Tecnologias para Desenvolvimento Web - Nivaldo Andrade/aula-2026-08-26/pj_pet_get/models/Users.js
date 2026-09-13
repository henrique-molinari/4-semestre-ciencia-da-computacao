//requerer somente o metodo DataTypes do Sequelize
const {DataTypes} = require('sequelize')
//requerer a conexao com banco
const conn = require('../db/conn')

//definir o model user
const User = conn.define('users', {
    name:{
        type: DataTypes.STRING,
        required: true
    },
    email:{
        type: DataTypes.STRING,
        required: true
    },
    password:{
        type: DataTypes.STRING,
        required: true
    },
    image:{
        type: DataTypes.STRING,
    },
    phone:{
        type: DataTypes.STRING,
        required: true
    },
})

module.exports = User;