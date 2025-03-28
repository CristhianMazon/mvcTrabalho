const User = require('../models/user')

class UserController {
    static insert(req, res) {
        const { id, name, email, password } = req.body
        const user = new User(id, name, email, password)
        user.save()
        res.status(201).json(user)
    }

    static findAll(req, res) {
        const users = User.fetchAll()
        res.json(users)
    }

    static update(req, res) {
        const { id, name } = req.body
        User.updateName(id, name)
        res.status(200).json({ message: "User updated" })
    }

    static remove(req, res) {
        const { id } = req.params
        User.removeById(Number(id))
        res.status(200).json({ message: "User deleted" })
    }
}

module.exports = UserController
