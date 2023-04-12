import {usuarioCriptomonedasPojo} from "../data/models/usuario_criptos.model"
import {usuarioCriptosRepository} from "../data/repositories/usuario_criptos.repository"
import {usuario_criptosDto} from "../types"


export class usuario_criptosService{

    _usuarioCriptosRepository = new usuarioCriptosRepository;
    static updateusuariocriptos: any;

    constructor(){
        this._usuarioCriptosRepository = new usuarioCriptosRepository();
    }

    async updateusuariocriptos(usuarioCriptosUser: usuario_criptosDto) : Promise<usuario_criptosDto>{
       var UsuarioCriptomonedasPojo : usuarioCriptomonedasPojo = usuarioCriptosUser as usuarioCriptomonedasPojo
        return undefined;
    }
}