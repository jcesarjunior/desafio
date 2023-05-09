//import User from '../models/User'

class UserController {
    static async showUsers(req, res) {
        res.send('Chegou aqui')
    }
    static async test(req, res) {
        res.send('Teste de endereçamento de rota')
    }
}

export default UserController