require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

// Middleware para resolver o cors
const cors = require("cors");
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Middleware para lidar com os jsons
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importação das rotas padrões
const usuarioRouter = require("./routes/usuarioRouter.js");
const clientesRouter = require("./routes/clientesRouter.js");
const categoriaRouter = require("./routes/categoriaRouter.js");
const produtosRouter = require("./routes/produtosRouter.js");
const pedidosRouter = require("./routes/pedidosRouter.js")

// Rotas
app.use("/usuarios", usuarioRouter);
app.use("/clientes", clientesRouter);
app.use("/categorias", categoriaRouter);
app.use("/produtos", produtosRouter);
app.use("/pedidos", pedidosRouter)

// Rota padrão do servidor
app.get("/", (req, res) => {
  res.json("Oi, bem vindo");
});

// Traz as configurações do banco
const pool = require("./config/db.js");
//Cria uma conexão teste com o banco
(async () => {
  try {
    // Se o banco de dados estiver ativo, ai sim o servidor será iniciado

    await pool.getConnection();
    console.log("Banco conectado");
    // Se o banco de dados estiver ativo, ai sim o servidor será iniciado
    app.listen(port, () => {
      console.log(`Servidor funcionando na porta ${port}`);
    });
  } catch (erro) {
    // Se deu erro, avisa e encerra a tentativa
    console.log("Erro ao tentar conectar com o banco de dados");
    process.exit(1);
  }
})();