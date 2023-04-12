import { usuario_criptosService } from "../services/usuario_criptos.service";
import { usuario_criptosDto } from "../types";
import  parseUsuarioCriptoUser from "../funciones/funciones"

const Usuario_criptosService : usuario_criptosService = new usuario_criptosService();

export const Usuario_criptoController = {

    updateCriptos : (req:any,res:any) => {

        try{
            const inputusuarioCriptos = parseUsuarioCriptoUser(req.body)
            usuario_criptosService.updateusuariocriptos(inputusuarioCriptos).then(result =>{
                res.json(result)
            })
        }catch(e){
            res.sendStatuts(400)
        }

    }

}



