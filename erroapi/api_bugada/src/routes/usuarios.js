const express = require("express");
const router = express.Router();

const usuariosController = require("../controllers/usuarioController");

router.post("/", usuariosController.listarUsuarios);

module.exports = router;
