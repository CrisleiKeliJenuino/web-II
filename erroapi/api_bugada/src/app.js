const express = require("express");

const usuariosRoutes = require("./route/usuarios");
const helloRoutes = require("./routes/hello");

const app = express();

// middleware para JSON
// app.use(express.json());

// rotas da aplicação
app.use("/usuario", usuariosRoutes);
app.use("/hello", helloRoutes);

module.exports = app;
