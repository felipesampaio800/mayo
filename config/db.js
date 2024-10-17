// config/db.js

const { Sequelize } = require('sequelize');

// Carrega as variáveis de ambiente
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,     // Nome do banco de dados
  process.env.DB_USER,     // Usuário do banco de dados
  process.env.DB_PASS,     // Senha do banco de dados
  {
    host: process.env.DB_HOST, // Host do banco de dados
    port: process.env.DB_PORT, // Porta do banco de dados
    dialect: 'mysql',
    dialectOptions: {
      // Se o seu provedor exigir SSL, configure aqui
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    logging: false // Desativa logs detalhados (opcional)
  }
);

// Verificar a conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados foi bem-sucedida.');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

module.exports = sequelize;
