// src/controllers/projectController.js
const Project = require('../models/project');

class ProjectController {
    static create(req, res) {
        const { name, description } = req.body;
        const project = new Project(name, description);
        project.save();
        res.status(201).json(project);
    }

    static list(req, res) {
        const projects = Project.fetchAll();
        res.json(projects);
    }

    static update(req, res) {
        const { id } = req.params;
        const { name, description } = req.body;

        const project = Project.findById(Number(id));
        if (project) {
            project.name = name || project.name;
            project.description = description || project.description;
            res.json(project);
        } else {
            res.status(404).json({ message: 'Projeto não encontrado' });
        }
    }

    static remove(req, res) {
        const { id } = req.params;
        const success = Project.deleteById(Number(id));

        if (success) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Projeto não encontrado' });
        }
    }
}

module.exports = ProjectController;
