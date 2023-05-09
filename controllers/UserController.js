import User from '../models/User.js'
import bcrypt from 'bcryptjs'

class UserController {
    // mostrar todos os usuários
    static async showUsers(req, res) {
        await User.findAll().then(resultados => {
            res.send(resultados)
        }).catch(erro => {
            console.log(erro);
        });
    }
    //mostrar um usuário específico
    static async showUser(req, res) {
        const id = req.params.id
        await User.findOne({ where: { id: id } }).then(resultados => {
            res.send(resultados)
        }).catch(erro => {
            console.log(erro);
        });
    }
    //recuperar o usuário para preencher o formulário de atualização
    static async updateUser(req, res) {
        const id = req.params.id
        await User.findOne({ where: { id: id } }).then(resultados => {
            res.send(resultados)
        }).catch(erro => {
            console.log(erro);
        });
    }
    //atualizar um usuário específico
    static async updateUserPost(req, res) {
        const id = req.body.id

        const user = {
            name: req.body.name,
            email: req.body.email,
        }

        User.update(user, { where: { id: id } })
            .then(() => {
                res.send('Atualizado com sucesso !')
            })
            .catch((err) => console.log())
    }

    //excluir um usuário específico
    static async removeUser(req, res) {
        const id = req.body.id
        User.destroy({ where: { id: id } })
            .then(() => {
                res.send('Usuário removido com sucesso!')
            })
            .catch((err) => console.log())
    }



    // criar um novo usuário
    static async registerPost(req, res) {

        const name = req.body.name
        const email = req.body.email
        const pass = req.body.pass



        //email validation
        const checkIfUserExists = await User.findOne({ where: { email: email } })

        if (checkIfUserExists) {
            res.send('O e-mail já está em uso!')

            return
        }
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(pass, salt)

        const user = {
            name,
            email,
            pass: hashedPassword,
        }

        User.create(user)
            .then((user) => {
                res.send('Cadastro realizado com sucesso!')
            })
            .catch((err) => console.log(err))

    }
}

export default UserController