import express from 'express'
import RuralProducerController from '../controllers/RuralProducerController.js'
const router = express.Router()



router.get('/ruralProducers', RuralProducerController.showAllRuralProducer)
router.post('/registerRuralProducer', RuralProducerController.registerRuralProducer)








export default router

