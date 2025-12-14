import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express() 

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.post('/api/login',(req,res)=>{
    const {username,password} = req.body        

    if(username === 'Admin' && password === '@adminVittaPrime!'){
        res.json({message: 'Usuário autenticado!'})
    } else {
        res.status(401).json({message: 'Erro de autenticação'})
    }      
})

export default app
