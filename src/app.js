const express = require('express')
const path = require('path')

const app = express() 
const port = 3000 

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(port,()=>{
    console.log(`servidor rodando no endereço http://localhost:${port}`)
})

