const express = require("express");
const path = require("path"); // Necessário para usar o path.join
const app = express();
const bodyParser = require("body-parser");
const PORT = 3001;
const sequelize = require('./config/db');
const todoRoutes = require('./routes/toDoRoutes'); // Importando as rotas

// Configuração para servir arquivos estáticos (CSS, JS, Imagens, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Configuração para processar dados de formulários e JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Verificar a conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados foi bem-sucedida.');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

// Servir o HTML (página principal)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Usar as rotas para a todo list (caminhos para as APIs)
app.use('/api/todos', todoRoutes);  // Prefira colocar suas rotas da API em um caminho separado

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
