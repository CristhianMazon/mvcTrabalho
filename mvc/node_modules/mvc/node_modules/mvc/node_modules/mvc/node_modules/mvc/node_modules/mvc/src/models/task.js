const tasks = []

class Task {
    constructor(title, status, projectId, userId) {
        this.id = tasks.length + 1
        this.title = title
        this.status = status || 'não concluída'
        this.projectId = projectId
        this.userId = userId
    }

    save() {
        tasks.push(this)
    }

    static fetchAll() {
        return tasks
    }

    static fetchByProject(projectId) {
        return tasks.filter(task => task.projectId === projectId)
    }

    static fetchByUser(userId) {
        return tasks.filter(task => task.userId === userId)
    }

    static findById(id) {
        return tasks.find(task => task.id === id)
    }

    static remove(id) {
        const index = tasks.findIndex(task => task.id === id)
        if (index > -1) {
            tasks.splice(index, 1)
        }
    }
}

module.exports = Task
