import { criptomonedasPojo } from './../data/models/criptomonedas.model';
import { CriptomonedasRepository } from "../data/repositories/criptomonedas.repository";
import { criptomonedasDto } from "../types";


export class CriptomonedasService{
    _criptomedasRepository : CriptomonedasRepository;

    constructor(){
        this._criptomedasRepository = new CriptomonedasRepository()// con el paréntesis inicializas porque es una clase
    }

    async getCoinsFromDatabase(): Promise<criptomonedasDto[]>{
        //en los servicios se usan las funciones del repositorio
        const CryptomonedasPromise =  this._criptomedasRepository.getCritomonedas()
        .then(pojoDeCriptomonedas =>{

            pojoDeCriptomonedas.forEach(criptoMoneda => {
                return this.parsePojoToDto(criptoMoneda)
            });

            return pojoDeCriptomonedas
        })
        .catch(error => {
            console.log(error)
            throw error
        })

        return CryptomonedasPromise

    }
    
    parsePojoToDto(criptomonedasPojo: criptomonedasPojo): criptomonedasDto{
        
        const criptoDto : criptomonedasDto = {
            cripto_id: criptomonedasPojo.cripto_id ,
            cripto_name: criptomonedasPojo.cripto_name,
            stock: criptomonedasPojo.stock,
            value:criptomonedasPojo.value
        }

        return criptoDto//estdeo devuelve un objeto de tipo Json
    }


}
