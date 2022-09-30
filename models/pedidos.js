const conexao = require("../infraestrutura/conexao")

class Pedidos {
    adiciona(pedidos, res){
        const sql = "INSERT INTO PEDIDOS SET ?"
        pedidos.map( (pedido) => {
            conexao.query(sql, pedido, (erro, resultados) => {
                if(erro){
                    res.status(400).json(erro)
                    exit(9)
                }
        })
    })
        res.status(200).send("pedidos cadastrados com sucesso")
    }
    consulta(pedidos,res){
        const sql = "SELECT HORA AS NAME, GMV AS GMV, VENDASD364 AS VENDASD364 FROM PEDIDOS"
        conexao.query(sql, pedidos, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else{
                res.status(200).json(resultados)
            }
        })
    } 
    altera(id,pedidos,res){
        const sql = "UPDATE PEDIDOS SET ? WHERE  ID=?"
        conexao.query(sql, [ pedidos, id ], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else{
                res.status(200).json({id, ...pedidos})
            }
        })
    }
    deleta(id, res){
        const sql = `DELETE FROM PEDIDOS WHERE ID=${id.id}`
        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else{
                res.status(200).json(resultados)
            }
        })
    } 
}

module.exports = new Pedidos