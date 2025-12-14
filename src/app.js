import { error } from 'console'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const raiz = path.resolve(__dirname,'..')

const app = express() 

app.use(express.static(path.join(raiz,'public')))
app.use(express.json())

app.get('/',(req,res)=>{
    res.sendFile(path.join(raiz, 'public','index.html'))
})

app.post('/api/login',(req,res)=>{
    const {usuario,senha} = req.body        

    if(usuario === 'Admin' && senha === '@adminVittaPrime!'){
        res.json({error: 'Usuário autenticado!'})
    } else {
        res.status(401).json({error: 'Erro de autenticação'})
    }      
})

export default app
