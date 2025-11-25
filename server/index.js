require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

const cors = require('cors')
app.use(cors({
    origin:"*",
    credentials: true
}))

//Midleware para lidar com os jsons
app.use(express.json() )
app.use(express.urlencoded({extended : true}))

//Criação das rotas padrões
const usuarioRouter = require("./routes/usuarioRouter.js")
const clientesRouter = require("./routes/clientesRouter.js")
const categoriaRouter = require("./routes/categoriaRouter.js")
const produtosRouter = require("./routes/produtosRouter.js")
// const pedidosRouter = require("./routes/pedidosRouter.js")

// Rotas
app.use("/usuarios", usuarioRouter)
app.use("/clientes", clientesRouter)
app.use("/categoria", categoriaRouter)
app.use("/produtos", produtosRouter)
// app.use("/pedidos", pedidosRouter)

//Rota padrão do servidor
app.get('/', (req, res) => {
  res.send('Servidor Funcionando')
})

//Traz as configurações do banco
const pool = require("./config/db.js")

pool.getConnection( (erro, conexao) => {

    //Se deu erro, avisa e encerra a tentativa
    if(erro){
        console.log("Erro ao tentar conectar com o banco de dados")
        process.exit(1)
    }
    //se deu certo, também avisa e para a conexão
    console.log("Conectado com o banco de dados com sucesso")
    conexao.release()

// se o banco de dados estiver ativo, ai sim o servidor será iniciado
app.listen(port, () => {
  console.log(`Servidor funcionando na porta ${port}`)
})

})

