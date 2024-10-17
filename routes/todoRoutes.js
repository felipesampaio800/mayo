// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Rota para buscar todas as tarefas
router.get('/', todoController.getTodos);

// Outras rotas
router.post('/add', todoController.createTodo);
router.post('/update', todoController.updateTodoStatus);
router.post('/delete', todoController.deleteTodo);

module.exports = router;
