import{UserPojo} from"../models/user.model"
import{user_connect} from "../config/user.db.config"

export class UserRepository {
    _database : any = {}
    _userRepository : any

    constructor(){
        this._database = user_connect()
        this._userRepository = this._database.sequelize.getRepository(UserPojo)
    }

    async addUser(newUser : UserPojo) : Promise<string>{
        try{
        const emailCheck = await this._userRepository.findOne({
            where : {email : newUser.email }
        })
        if(!!emailCheck){  //Las 2 exclamaciones significa que está instanciado y que no es nulo
            return "El email que introduces ya existe, ¿no serás ya usuario?"
        }
        newUser = await this._userRepository.create(newUser)
        return newUser.user_id
        }catch(error){
        console.error(error)
        return "-1"
        } 
    }

    async getUser(emailPass : {email : string , password: string}) : Promise<UserPojo | undefined>{//los parámetros de la funcion es lo que recibimos del front, no devuelve un array porque es un único usuario

        try{
            const userCheck =  await this._userRepository.findOne({ //el userCheck contiene un pojo de un usuario
                where : {email : emailPass.email, password : emailPass.password}
            })


            if (!!userCheck){
                return userCheck
            }else{
                return undefined
            }
            
        }catch(error){
            console.error(error)
            return undefined
        }
    
    }
}