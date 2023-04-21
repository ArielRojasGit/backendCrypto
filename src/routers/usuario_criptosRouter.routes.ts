import express from 'express'
import {Usuario_criptoController} from '../controllers/usuario_criptos.controller'

const router = express.Router()


router.post('/conprar',Usuario_criptoController.comprarCripto)

export default router
module.exports = router
