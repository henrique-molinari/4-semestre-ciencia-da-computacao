//requerer o sequelize
const Sequelize = require('sequelize');

//parametros da conexao
const conn = new Sequelize(
    'db_get_a_pet',
    'root',
    '24062007',{
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);

try {
    conn.authenticate()
    console.info('Banco de dados conectado com sucesso!')
} catch (error) {
    console.info(`Não foi possivel conectar ao banco: ${error}`)
}

module.exports = conn;