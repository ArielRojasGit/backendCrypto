import express from 'express'
import { CriptomonedasController } from '../controllers/criptomonedas.controller';

const router = express.Router()
    router.get('/pintarcriptos', CriptomonedasController.getCriptos );//aqui siempre pasamos el controlador, en las rutas ponemos , la ruta y lo que tiene que hacer cuaando llega a esa ruta, que en este caso es la funcion que esta en el controlador
//TODO: Añadir
export default router
module.exports = router
