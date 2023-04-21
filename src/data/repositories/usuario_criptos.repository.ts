import { usuarioCriptomonedasPojo } from './../models/usuario_criptos.model';
import {usuario_criptos_connect} from "../config/usuarios_cripto.db.config"
import { UserPojo } from '../models/user.model';
import { criptomonedasPojo } from '../models/criptomonedas.model';


export class usuarioCriptosRepository{
    _db_usuario_cripto:any = {};//esto conecta a la bbdd, las llaves para inicializar lavariable como una base de datos

    _tabla_usuario_cripto:any;//esto a la tabla usuarios cripto
    _tabla_usuario:any
    _tabla_criptomonedas:any



    constructor(){
        this. _db_usuario_cripto = usuario_criptos_connect ()

        this._tabla_usuario_cripto  = this._db_usuario_cripto.sequelize.getRepository(usuarioCriptomonedasPojo)
        this. _tabla_usuario = this._db_usuario_cripto.sequelize.getRepository(UserPojo)
        this. _tabla_criptomonedas = this._db_usuario_cripto.sequelize.getRepository(criptomonedasPojo)
    }

    // async updateusuariocripto(criptouser : usuarioCriptomonedasPojo): Promise<string>{
    // const datos =  await this.usuarioCriptosRepository.findOne({where:{
    //         userid :  criptouser.user_id,
    //         criptoid: criptouser.cripto_id
    //     }
    //     })
    //     if (!!datos){
    //         this.usuarioCriptosRepository.update({amount:criptouser.amount}, {where:{
    //             userid :  criptouser.user_id,
    //             criptoid: criptouser.cripto_id
    //         }})
    //         return "actualizado"
    //     } else{
    //         this.usuarioCriptosRepository.create(criptouser)
    //         return "creado"

    //     }
    // }

    async comprarCripto(transData: usuarioCriptomonedasPojo):Promise<string>{ //en los parametros esta lo que me llega del front y en la promesa lo que va AL fron  
        
        try{

            const moneda = await this._tabla_criptomonedas.findByPk(transData.cripto_id)
            const newStock: number = (+moneda.stock) - (+transData.amount)

            const usuario = await this._tabla_usuario.findByPk(transData.user_id)
            const newDinero : number = ((+usuario.amount) - (+moneda.value * +transData.amount))

            if(newStock < 0 || newDinero < 0){
                return '-1'
            }

            await this._tabla_usuario.update({amount: newDinero})
            await this._tabla_criptomonedas.update({stock: newStock})

            const usuarioCriptorCheck = await this._tabla_usuario_cripto.findOne({where: {user_id: transData.user_id, cripto_id: transData.cripto_id}})

            if(!!usuarioCriptorCheck){
                await usuarioCriptorCheck.update({amount: transData.amount})
                return usuarioCriptorCheck.movement
            }else{
                const usuarioCripto = await this._tabla_usuario_cripto.create(transData)
                return usuarioCripto.movement
            }

        }
        catch(error){
            console.error(error)
            return error
        }

    }

}
