import { usuario_criptosService } from "../services/usuario_criptos.service";


const Usuario_criptosService : usuario_criptosService = new usuario_criptosService();

export const Usuario_criptoController = {

    comprarCripto : (req:any,res:any) => {

        try {
            const criptoComprarDatos = req.body
            Usuario_criptosService.comnprarcripto(criptoComprarDatos)
            .then(resId => {
                res.json(resId)
            }).catch(err => {
                console.log(err)
                res.sendStatus(500)
            })

        } catch (error) {
            
            console.log(error)
            res.sendStatus(500)
        }



    }

}

