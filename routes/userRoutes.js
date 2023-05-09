import express from 'express'
import UserController from '../controllers/UserController.js'
const router = express.Router()


//controller

router.get('/', UserController.test)

router.get('/users', UserController.showUsers)


export default router