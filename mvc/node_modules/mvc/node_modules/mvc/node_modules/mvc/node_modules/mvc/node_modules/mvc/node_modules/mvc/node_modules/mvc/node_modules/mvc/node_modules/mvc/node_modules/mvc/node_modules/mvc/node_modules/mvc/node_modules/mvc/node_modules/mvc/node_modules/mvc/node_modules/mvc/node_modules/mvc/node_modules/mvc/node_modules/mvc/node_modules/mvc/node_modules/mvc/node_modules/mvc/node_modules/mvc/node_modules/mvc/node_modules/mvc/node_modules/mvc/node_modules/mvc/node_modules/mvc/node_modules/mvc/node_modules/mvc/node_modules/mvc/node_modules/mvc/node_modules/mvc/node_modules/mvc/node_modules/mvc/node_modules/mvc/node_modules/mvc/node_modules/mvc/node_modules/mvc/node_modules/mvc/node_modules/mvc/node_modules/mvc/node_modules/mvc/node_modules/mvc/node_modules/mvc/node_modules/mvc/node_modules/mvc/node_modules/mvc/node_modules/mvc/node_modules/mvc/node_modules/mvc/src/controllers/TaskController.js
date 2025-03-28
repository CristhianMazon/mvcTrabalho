const Task = require('../models/task')

class TaskController {
    static insert(req, res) {
        const { title, status, projectId, userId } = req.body

        const task = new Task(title, status, projectId, userId)
        task.save()

        res.status(201).json(task)
    }

    static findAll(req, res) {
        const tasks = Task.fetchAll()
        res.json(tasks)
    }

    static findByProject(req, res) {
        const { projectId } = req.params
        const tasks = Task.fetchByProject(Number(projectId))
        res.json(tasks)
    }

    static findByUser(req, res) {
        const { userId } = req.params
        const tasks = Task.fetchByUser(Number(userId))
        res.json(tasks)
    }

    static update(req, res) {
        const { id } = req.params
        const { title, status } = req.body

        const task = Task.findById(Number(id))
        if (task) {
            task.title = title || task.title
            task.status = status || task.status
            res.json(task)
        } else {
            res.status(404).json({ message: 'Tarefa não encontrada' })
        }
    }

    static remove(req, res) {
        const { id } = req.params
        Task.remove(Number(id))
        res.status(204).send()
    }
}

module.exports = TaskController
