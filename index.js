const port = process.env.PORT || 3000

const customExpress = require("./config/customExpress")


const tabelas = require("./infraestrutura/tabelas")
const conexao = require("./infraestrutura/conexao")

conexao.connect((erro) => {
    if(erro){
        console.log(erro)
    }else {
        console.log("Conectado com sucesso")
        tabelas.init(conexao)
        const App = customExpress()
        App.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`)
        })
    }
})


