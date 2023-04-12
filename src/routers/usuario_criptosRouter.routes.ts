import express from 'express'
import {Usuario_criptoController} from '../controllers/usuario_criptos.controller'

const router = express.Router()

router.post('/update',Usuario_criptoController.updateCriptos);


export default router
module.exports = router