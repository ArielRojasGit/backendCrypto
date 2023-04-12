import { criptomonedasPojo } from "../models/criptomonedas.model";
import { criptomonedas_connect } from "../config/criptomonedas.db.config";

export class CriptomonedasRepository{

    _database : any = {}
    _CriptomonedasRepository : any //esto es la tabla

    constructor(){
        this._database = criptomonedas_connect()
        this._CriptomonedasRepository = this._database.sequelize.getRepository(criptomonedasPojo)//criptomonedasPojo esta mirando el decorador de la tabla en el fichero de criptomonedas pojo
    }


    async getCritomonedas(): Promise<criptomonedasPojo[]>{ //este criptomonedasPojo esta devolviendo las filas , en un array

        try{
            const criptomonedasCheck = await this._CriptomonedasRepository.findAll()
            console.log('en el rep')
            console.log(criptomonedasCheck)
            if(!!criptomonedasCheck){
                return criptomonedasCheck
            }else{
                return []
            }

        }catch(error){
            console.error(error)
            return []
        }
    }
}