// controllers/todoController.js
const Todo = require("../models/Todo");
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();  // Busque as tarefas do banco de dados
    res.json(todos);  // Retorne as tarefas em formato JSON
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar tarefas' });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { name, completed } = req.body;

    const newTodo = await Todo.create({
      name: name,
      completed: completed || false,
    });

    res.status(201).json(newTodo);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erro ao criar tarefa", details: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.destroy({
      where: {
        id: req.body.id,
      },
    });
    res.redirect("/");
  } catch (err) {
    res.status(500).send("Erro ao deletar tarefa");
  }
};

exports.updateTodoStatus = async (req, res) => {
  try {
    const { id, completed } = req.body;
    await Todo.update({ completed }, { where: { id } });
    res.status(200).send('Status atualizado com sucesso');
  } catch (err) {
    res.status(500).send('Erro ao atualizar status da tarefa');
  }
};
