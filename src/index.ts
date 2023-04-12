import express from 'express';
import userRouter from './routers/user.routes'
import CriptomonedasRouter from './routers/criptomonedas.routes' 
import cors from "cors";

const allowedOrigins = ['http://localhost:4200']
const options: cors.CorsOptions = { origin: allowedOrigins } 

const app = express();
app.use(express.json());
const PORT = 8532;
app.use(cors(options))

app.get('/ping',(_req, res)=>{
    console.log('Han hecho ping!!')
    let MESSAGE : string = 'Pong'
    res.send(MESSAGE)
}) 

app.use('/user', userRouter)
app.use('/criptomonedas', CriptomonedasRouter)


app.listen(PORT, () =>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})



