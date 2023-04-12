import {usuarioCriptomonedasPojo} from "../models/usuario_criptos.model";
import {usuario_criptos_connect} from "../config/usuarios_cripto.db.config"
import { UserPojo } from "../models/user.model";
import { usuario_criptosDto } from "../../types";

export class usuarioCriptosRepository{
    _database:any = {};
    _usuarioCriptosRepository : any;
    usuarioCriptosRepository: any;


    constructor(){
        this._database = usuario_criptos_connect ()
        this._usuarioCriptosRepository = this._database.sequelize.getRepository(usuarioCriptomonedasPojo)
    }

    async updateusuariocripto(criptouser : usuarioCriptomonedasPojo): Promise<string>{
    const datos =  await this.usuarioCriptosRepository.findOne({where:{
            userid :  criptouser.user_id,
            criptoid: criptouser.cripto_id
        }
        })
        if (!!datos){
            this.usuarioCriptosRepository.update({amount:criptouser.amount}, {where:{
                userid :  criptouser.user_id,
                criptoid: criptouser.cripto_id
            }})
            return "actualizado"
        } else{
            this.usuarioCriptosRepository.create(criptouser)
            return "creado"
        }
    }

}