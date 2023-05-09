import express from 'express'
import UserController from '../controllers/UserController.js'
const router = express.Router()


//controller

router.get('/', UserController.showUsers)

router.get('/users', UserController.showUsers)

router.get('/user/:id', UserController.showUser)

router.get('/userEdit/:id', UserController.updateUser)
router.post('/userEdit', UserController.updateUserPost)

router.post('/remove', UserController.removeUser)

router.post('/register', UserController.registerPost)


export default router