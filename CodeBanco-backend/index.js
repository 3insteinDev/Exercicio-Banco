require('./config/conexao')
const express = require('express')
const app = express()
const porta = 3000

app.use(express.json())

const rotasTransferencias = require('./rotas')

app.use('/transferencias', rotasTransferencias)

app.listen(porta, ()=>{
    console.log("servidor está rodando")
})
