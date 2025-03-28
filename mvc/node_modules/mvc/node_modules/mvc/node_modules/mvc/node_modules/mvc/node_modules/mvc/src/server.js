const express = require('express');
const UserController = require('./controllers/userController'); // Caminho correto para o UserController
const ProjectController = require('./controllers/projectController'); // Caminho correto para o ProjectController
const TaskController = require('./controllers/taskController'); // Caminho correto para o TaskController

const app = express();

app.use(express.json());

// Rotas de Usuários
app.post('/api/users', UserController.insert); // Criar usuário
app.get('/api/users', UserController.findAll); // Listar todos os usuários
app.put('/api/users/:id', UserController.update); // Atualizar usuário por ID
app.delete('/api/users/:id', UserController.remove); // Remover usuário por ID

// Rotas de Projetos
app.post('/api/projects', ProjectController.create); // Criar projeto
app.get('/api/projects', ProjectController.list); // Listar todos os projetos
app.put('/api/projects/:id', ProjectController.update); // Atualizar projeto por ID
app.delete('/api/projects/:id', ProjectController.remove); // Remover projeto por ID

// Rotas de Tarefas
app.post('/api/tasks', TaskController.insert); // Criar tarefa
app.get('/api/tasks', TaskController.findAll); // Listar todas as tarefas
app.get('/api/tasks/project/:projectId', TaskController.findByProject); // Listar tarefas por projeto
app.get('/api/tasks/user/:userId', TaskController.findByUser); // Listar tarefas por usuário
app.put('/api/tasks/:id', TaskController.update); // Atualizar tarefa por ID
app.delete('/api/tasks/:id', TaskController.remove); // Remover tarefa por ID

// Inicializando o servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
