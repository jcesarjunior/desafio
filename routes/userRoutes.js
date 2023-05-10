import express from 'express'
import UserController from '../controllers/UserController.js'
const router = express.Router()


//controller



router.get('/users', UserController.showUsers)

router.get('/user/:id', UserController.showUser)

router.get('/userEdit/:id', UserController.updateUser)
router.post('/userEdit', UserController.updateUserPost)

router.post('/remove', UserController.removeUser)

router.post('/register', UserController.registerPost)

router.get('/', UserController.showUsers)

export default router