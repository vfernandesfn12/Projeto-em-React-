const express = require("express");
const router = express.Router()

//Importação do controller
const pedidosController = require("../controllers/pedidosController.js")

//Criando rotas
router.get("/", pedidosController.listar)

module.exports = router