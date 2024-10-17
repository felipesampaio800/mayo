// config/db.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todo_list_db', 'root', 'ALMIr6221', {
  host: 'localhost',
  dialect: 'mysql'
});

// Verificar a conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados foi bem-sucedida.');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

module.exports = sequelize;
