// config/db.js

const { Sequelize } = require('sequelize');

// Carrega as variáveis de ambiente
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Configuração de conexão com PostgreSQL no Render.com
const sequelize = new Sequelize(
  process.env.DB_NAME || 'mayo_sql',      // Nome do banco de dados
  process.env.DB_USER || 'mayo_sql_user', // Nome do usuário do banco de dados
  process.env.DB_PASS || 'UG3HvPls83cAH6nwoV0E2Cuq2lvB7SbQ', // Senha do banco de dados
  {
    host: process.env.DB_HOST || 'dpg-cs8ols5ds78s738j04kg-a',  // Hostname do banco de dados no Render
    port: process.env.DB_PORT || 5432,  // Porta do PostgreSQL (geralmente 5432)
    dialect: 'postgres',        // Tipo de banco de dados (PostgreSQL)
    dialectOptions: {
      // Se o Render.com exigir SSL para o banco de dados, configure isso
      ssl: process.env.NODE_ENV === 'production' ? { require: true, rejectUnauthorized: false } : false
    },
    logging: false  // Desativa logs detalhados
  }
);

// Verifica a conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados foi bem-sucedida.');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

module.exports = sequelize;
