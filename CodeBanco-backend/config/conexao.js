const mysql = require('mysql')
const conexao = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    port: 0,
    database: 'codebanco'
})
conexao.connect((erro)=>{
    if(erro)throw erro
    console.log('estamos conectados com a BD do CODEBANCO')
})

module.exports = conexao