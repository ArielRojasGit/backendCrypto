import { usuarioCriptomonedasPojo } from "../data/models/usuario_criptos.model";
import {usuarioCriptosRepository} from "../data/repositories/usuario_criptos.repository"
import {usuario_criptosDto} from "../types"
import { v4 as uuid } from 'uuid';



export class usuario_criptosService{

    _usuarioCriptosRepository = new usuarioCriptosRepository;
    static updateusuariocriptos: any;


    constructor(){
        this._usuarioCriptosRepository = new usuarioCriptosRepository();
    }

    // async updateusuariocriptos(usuarioCriptosUser: usuario_criptosDto) : Promise<usuario_criptosDto>{
    //    var usuarioCriptomonedasPojo : usuarioCriptomonedasPojo = usuarioCriptosUser as usuarioCriptomonedasPojo
    //     return undefined;
    // }

    async comnprarcripto(datosUsuarios_cripto:usuario_criptosDto):Promise<string>{
        const usuarioCriptomonedas = this.parseDtoIntoPojo(datosUsuarios_cripto)

       const CriptoUserPromise = this._usuarioCriptosRepository.comprarCripto(usuarioCriptomonedas)
       .then(resMovId => {
            return resMovId
       })
       .catch( err => {
        console.log(err)
        throw err
       })

       return CriptoUserPromise
    }


    parseDtoIntoPojo(userCriptoDto: usuario_criptosDto): usuarioCriptomonedasPojo {  
        const userCriptoPojo = userCriptoDto as usuarioCriptomonedasPojo;
        userCriptoPojo.user_id = uuid()
        return userCriptoPojo
      }
}