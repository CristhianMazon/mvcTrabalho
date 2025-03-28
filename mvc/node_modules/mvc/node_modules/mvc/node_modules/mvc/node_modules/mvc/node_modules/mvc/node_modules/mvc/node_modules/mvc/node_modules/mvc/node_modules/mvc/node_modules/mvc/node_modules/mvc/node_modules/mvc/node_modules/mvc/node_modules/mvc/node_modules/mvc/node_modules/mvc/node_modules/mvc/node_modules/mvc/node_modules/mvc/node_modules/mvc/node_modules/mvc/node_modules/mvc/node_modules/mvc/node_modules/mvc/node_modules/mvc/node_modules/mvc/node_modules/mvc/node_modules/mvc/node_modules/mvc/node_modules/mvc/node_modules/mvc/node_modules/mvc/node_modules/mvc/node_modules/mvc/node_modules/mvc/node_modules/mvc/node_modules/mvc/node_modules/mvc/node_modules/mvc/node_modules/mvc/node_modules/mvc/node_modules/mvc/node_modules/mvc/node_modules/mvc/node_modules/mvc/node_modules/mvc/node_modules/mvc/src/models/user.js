const users = []

class User {
    constructor(name, email, password) {
        this.id = users.length + 1  // ID gerado com base no comprimento do array
        this.name = name
        this.email = email
        this.password = password  // A senha não está criptografada nesse exemplo simples
    }

    // Método para salvar o usuário
    save() {
        users.push(this)  // Adiciona o usuário ao array
    }

    // Método estático para buscar todos os usuários
    static fetchAll() {
        return users  // Retorna todos os usuários
    }

    // Método estático para buscar um usuário pelo ID
    static findById(id) {
        return users.find(user => user.id === id)  // Encontra o usuário pelo ID
    }

    // Método estático para buscar um usuário pelo email
    static findByEmail(email) {
        return users.find(user => user.email === email)  // Encontra o usuário pelo email
    }

    // Método estático para remover um usuário
    static remove(id) {
        const index = users.findIndex(user => user.id === id)  // Encontra o índice do usuário
        if (index > -1) {
            users.splice(index, 1)  // Remove o usuário do array
        }
    }
}

module.exports = User
