// Requerer o siquelize
const Sequelize = require('sequelize')

//parametros de conexão
const conn = new Sequelize(
    'db_pet_a_get',
    'root',
    'root', {
        host: 'localhost',
        dialect: 'mysql',
        port:3306
    }
)

try {
    conn.authenticate()//função
    console.info('Banco de dados conectado com sucesso');
} catch (error) {
        console.info(`Não foi possível conectar ao banco:,${error}`);
}

module.exports = conn