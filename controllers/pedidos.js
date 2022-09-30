const pedidos = require("../models/pedidos")

module.exports = (App) => {
    App.get("/pedidos", (req, res) => {
        const order = req.query.pedido
        const hora = req.query.hora
        pedidos.consulta(order,res)
    } )

    App.post("/pedidosPost", (req,res) => {
        const pedido = req.body
        pedidos.adiciona(pedido.data,res)
    })

    App.patch("/pedidosPatch", (req,res) => {
        const id = req.query
        const pedido = req.body
        pedidos.altera(id.id,pedido,res)
    })

    App.delete("/pedidosDelete/:id", (req,res) => {
        const id = req.params
        pedidos.deleta(id, res)
    }) 
}