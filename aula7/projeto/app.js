const express = require('express');
const app = express();

app.use(express.json());

const usuariosRoutes = require('./routes/usuarios');
app.use('/usuarios', usuariosRoutes);

const loginRoutes = require('./routes/login');
app.use('/login', loginRoutes);
 
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

module.exports = app;