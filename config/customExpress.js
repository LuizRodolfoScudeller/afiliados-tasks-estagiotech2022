const express = require("express")
const cors = require("cors")

const consign = require("consign")

const bodyParser = require("body-parser")

module.exports = () => {
    const App = express()

    App.use(bodyParser.json())

    App.use((req, res, next) => {
        //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
        res.header("Access-Control-Allow-Origin", "*");
        //Quais são os métodos que a conexão pode realizar na API
        res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
        App.use(cors());
        next();
    });  
    
    App.use(bodyParser.urlencoded({extended:true}))
    consign().include("controllers").into(App)

    return App
}




