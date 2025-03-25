const express = require('express')
const UserController = require('./controllers/userController')
const ProjectController = require('./controllers/projectController')
const TaskController = require('./controllers/taskController')

const app = express()

app.use(express.json())

// Usuários
app.post('/api/users', UserController.insert)        // Criar usuário
app.get('/api/users', UserController.findAll)        // Listar todos os usuários
app.put('/api/users/:id', UserController.update)     // Atualizar nome de usuário (agora com :id)
app.delete('/api/users/:id', UserController.remove)  // Remover usuário

// Projetos
app.post('/api/projects', ProjectController.insert)
app.get('/api/projects', ProjectController.findAll)
app.put('/api/projects', ProjectController.update)
app.delete('/api/projects/:id', ProjectController.remove)

// Tarefas
app.post('/api/tasks', TaskController.insert)
app.get('/api/tasks', TaskController.findAll)
app.put('/api/tasks', TaskController.update)
app.delete('/api/tasks/:id', TaskController.remove)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
