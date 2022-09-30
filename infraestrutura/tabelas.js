class Tabelas {
    init(conection){
        this.conection = conection
        this.criarPedidos()
    }

    criarPedidos(){
        const sql = "create table if not exists PEDIDOS(ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY, HORA varchar(50),GMV double(5, 2), VENDASD364 double(5, 2))"
        this.conection.query(sql, (erro) => {
            if(erro){
                console.log(erro)

            }else{
                // console.log("Tabela pedidos criada com sucesso")
            }
        })
    }
}

module.exports = new Tabelas