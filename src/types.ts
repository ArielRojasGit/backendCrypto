export class UserDto{
    user_id: string
    amount: number
    birth_date: string
    full_name: string
    password: string
    email: string
}

export class criptomonedasDto{
    cripto_id: string
    cripto_name: string
    stock: number
    value: number
}

export class usuario_criptosDto{
    amount : number
    user_id : string
    cripto_id : string
}

export type NewUserDto = Omit<UserDto, 'user_id'>//cuando se registra un usuario en el front debe llegar todo menos su id que se crea automáticamente
