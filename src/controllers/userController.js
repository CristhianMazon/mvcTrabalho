const User = require('../models/user')

class UserController {
    // Criar um novo usuário
    static insert(req, res) {
        const { name, email, password } = req.body

        // Verifica se todos os campos obrigatórios foram preenchidos
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Nome, email e senha são obrigatórios' })
        }

        // Verifica se o email já está registrado
        const existingUser = User.findByEmail(email)
        if (existingUser) {
            return res.status(400).json({ message: 'Email já registrado' })
        }

        // Cria o novo usuário e salva
        const user = new User(name, email, password)
        user.save()

        // Retorna o usuário criado
        res.status(201).json(user)
    }

    // Listar todos os usuários
    static findAll(req, res) {
        const users = User.fetchAll()
        res.json(users)
    }

    // Buscar usuário pelo ID
    static findById(req, res) {
        const { id } = req.params
        const user = User.findById(Number(id))

        if (user) {
            res.json(user)
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' })
        }
    }

    // Atualizar informações de um usuário (PUT)
    static update(req, res) {
        const { id } = req.params
        const { name, email, password } = req.body

        const user = User.findById(Number(id))

        if (user) {
            // Atualiza os campos do usuário
            user.name = name || user.name
            user.email = email || user.email
            user.password = password || user.password

            // Salva as alterações
            user.save()

            res.json(user)
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' })
        }
    }

    // Remover um usuário
    static remove(req, res) {
        const { id } = req.params
        const user = User.findById(Number(id))

        if (user) {
            User.remove(Number(id))
            res.status(204).send()
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' })
        }
    }
}

module.exports = UserController
