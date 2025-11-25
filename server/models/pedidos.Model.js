//importa a conexão com o banco de dados
const pool = require("../config/db.js")

//Objeto com as funções do model
const pedidosModel = {
    //Função que solicita ao banco a lista de pedidos
    async listaPedidos() {
        //Cria o comando sql para listar os pedidos 
        const sql = "SELECT * FROM pedidos"

        //Faz a consulta sql e guarda o resultado na variavel linhas
        const [linhas] = await pool.query(sql)

        return linhas
    }
}

module.exports = pedidosModel