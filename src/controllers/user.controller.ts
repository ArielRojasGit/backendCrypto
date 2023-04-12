import { UserService } from "../services/user.service";
const userService: UserService = new UserService();//necesitamos inicializar la clase, por eso pnemos new UserService() al poner losparentesis() ejecutamos la clase sino llamaríamos


export const userController = {  //estoy guardando en una variable una clave -valor y el valor es una función
    getUser: (req: any, res: any) => {//el getUser es la clave y lo demas el validador, por eso ponemos dos puntos
        try {
            const userData = req.body //aqui lo que hacemos es crear una const de tipo clave-valor para guardar  los datos que vienen del front, lo hacemos asi porque el body  solo puede contener una variable
            console.log('en el controller está esto')
            console.log(userData)
            userService.getUser(userData)
            .then((user) => {        //aqui devolvemos la promesa que hice en getUser de user.service que como vemos nos puede devolver un userDto o un undefined(linea27)

                if (!!user){
                    res.json(user)
                }else{
                    res.sendStatus(404)
                }

            })
            } catch (error) {
                console.error(error);
                res.sendStatus(500);
            }
        },
    addUser: (req :any , res : any)=>{
        try {
            const usuario=req.body
            userService.addUser(usuario).then ((userId) =>{//aqui devuelve la respuesta de la promesa que hice en addUser de user.service.ts, de la clase , vaya
                res.json(userId)
                
            })
            } catch (error) {
                console.error(error)
                res.sendStatus(500)
            }
        },

    
    }


/*     const variable = {
        key: value,

        getUser : function (req: any, res: any){

        }

        
    } */