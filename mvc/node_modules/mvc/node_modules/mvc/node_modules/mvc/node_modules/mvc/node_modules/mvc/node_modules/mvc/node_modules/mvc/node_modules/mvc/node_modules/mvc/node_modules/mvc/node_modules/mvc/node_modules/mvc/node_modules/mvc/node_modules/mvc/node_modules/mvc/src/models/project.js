const projects = []

class Project {
    constructor(id, name, description) {
        this.id = id
        this.name = name
        this.description = description
    }

    save() {
        projects.push(this)
    }

    static fetchAll() {
        return projects
    }

    static findById(id) {
        return projects.find(project => project.id === id)
    }

    static deleteById(id) {
        const index = projects.findIndex(project => project.id === id)
        if (index !== -1) {
            projects.splice(index, 1)
            return true
        }
        return false
    }
}

module.exports = Project
