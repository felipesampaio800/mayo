// models/Todo.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Definir o modelo Todo
const Todo = sequelize.define('Todo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false
  }
}, {
  // Opções adicionais do modelo
  timestamps: true, // Adiciona campos `createdAt` e `updatedAt` automaticamente
});

// Sincronizar o modelo com o banco de dados (cria a tabela se não existir)
sequelize.sync()
  .then(() => console.log('Tabela de todos sincronizada com sucesso'))
  .catch(err => console.error('Erro ao sincronizar tabela de todos:', err));

module.exports = Todo;
