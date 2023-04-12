import { usuario_criptosDto } from "../types";


const parseUsuarioCriptoUser = (object:any):usuario_criptosDto => {
    const usuarioCriptoUser:usuario_criptosDto={
        amount: object.amount,
        user_id: object.user_id,
        cripto_id: object.cripto_id,
        movement: object.movement
    }
    return usuarioCriptoUser
}


export default parseUsuarioCriptoUser;