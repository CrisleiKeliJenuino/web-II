const express = require("express");

const usuariosRouters = require("./routes/usuarios");
const helloRouters = require("./routes/hello");

const app = express();

// middleware para JSON
// app.use(express.json());

// rotas da aplicação
app.use("/usuarios", usuariosRouters);
app.use("/hello", helloRouters);

module.exports = app;
