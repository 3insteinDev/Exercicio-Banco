const rotas = require('express').Router()
const conexao = require('./config/conexao')

// *************ROTA para visualisar a lista completa da TABELA**************
rotas.get('/', (req,res)=>{
    let sql = 'select * from tb_transferencias'
    conexao.query(sql, (erro, rows, fields)=>{
        if(erro)throw erro
        res.json(rows)
    })
})

// *************ROTA para visualisar apenas um item da TABELA**************
rotas.get('/:id', (req,res)=>{
    const {id} = req.params
    let sql = `select * from tb_transferencias where id_transferencia = '${id}'`
    conexao.query(sql, (erro,rows, fields)=>{
        if(erro)throw erro
        res.json(rows[0])
    })
})

// ******************ROTA para INSERIR um item da TABELA********************
rotas.post('/', (req,res)=>{
    const {nomeCliente, valor, contaCliente}= req.body
    let sql = `insert into tb_transferencias(nomeCliente, valor, contaCliente)values('${nomeCliente}','${valor}','${contaCliente}')`
    conexao.query(sql,(erro,rows,fields)=>{
        if(erro)throw erro
        res.json({status:'transferência incluída com sucesso!'})
    })
})

// ******************ROTA para DELETAR um item da TABELA********************
rotas.delete('/:id',(req,res)=>{
    const {id} = req.params
    let sql = `delete from tb_transferencias where id_transferencia = '${id}'`
    conexao.query(sql,(erro,rows,fields)=>{
        if(erro)throw erro
        res.json({status:'transferência excluída com sucesso!'})
    })
})

// ******************ROTA para EDITAR um item da TABELA********************
rotas.put('/:id',(req,res)=>{
    const {id} = req.params
    const {nomeCliente,valor,contaCliente} = req.body
    let sql = `update tb_transferencias set
                nomeCliente = '${nomeCliente}',
                valor = '${valor}',
                contaCliente = '${contaCliente}'
                where id_transferencia = '${id}'`
    conexao.query(sql,(erro,rows,fields)=>{
        if(erro)throw erro
        res.json({status:'transferência editada com sucesso!'})
    })
})

module.exports = rotas

// let sql = 'select * from tb_transferencias order by descricao asc'