const express = require("express");

const usuariosRouters= require("./routes/usuarios");
const helloRouters = require("./routes/hello");

const app = express();

app.use(express.json());

app.use('/usuarios', usuariosRouters);
app.use('/hello', helloRouters);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});

module.exports = app;