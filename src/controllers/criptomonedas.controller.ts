import { CriptomonedasService } from "../services/criptomonedas.service";

const criptomonedasService: CriptomonedasService = new CriptomonedasService();

export const CriptomonedasController = {

    getCriptos: (_req:any, res:any)=>{

        try{        
            criptomonedasService.getCoinsFromDatabase()
            .then(cripto=>{
                res.json(cripto)
            })
        }catch(error){
            console.error(error);
            res.sendStatus(500);
        }
    }
}