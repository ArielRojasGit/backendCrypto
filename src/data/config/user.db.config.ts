import{Sequelize} from "sequelize-typescript";
import{UserPojo} from "../models/user.model";

export const user_connect = ()=>{
    const DB_HOSTNAME = 'localhost'
    const DB_PORT = 5432
    const DB_NAME = 'postgres'
    const DB_USERNAME= 'postgres'
    const DB_PASSWORD = 'LAdesql!!123'
    const DB_SCHEMA = 'criptos'
    const DB_DIALECT : any = 'postgres'

    const dbConfig = new Sequelize(DB_NAME,DB_USERNAME,DB_PASSWORD, {
        host:   DB_HOSTNAME,
        dialect: DB_DIALECT,
        schema: DB_SCHEMA,
        port: DB_PORT,
        repositoryMode: true,
        pool:{
            max: 10, //es el número de transacciones que se puede hacer
            min: 0,
            acquire: 20000,//tiempo máximo que puede estar en espera
            idle: 5000
        }
    })

    dbConfig.addModels([UserPojo])
    const db : any = {}
    db.Sequelize = Sequelize//con esto se indica el tipo de interfaz que tendrá
    db.sequelize = dbConfig//con esto se indica la configuración que hemos hecho arriba
    return db
}