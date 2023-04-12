import { userController } from '../controllers/user.controller';
import express from 'express'

const router = express.Router()
    router.post('/add', userController.addUser );//aqui siempre pasamos el controlador, en las rutas ponemos , la ruta y lo que tiene que hacer cuaando llega a esa ruta, que en este caso es la funcion que esta en el controlador

    router.post('/get', userController.getUser)



export default router
module.exports = router














