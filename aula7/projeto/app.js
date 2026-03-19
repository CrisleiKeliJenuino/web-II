const express = require('express');
const app = express();

app.use(express.json());

const usuariosRoutes = require('./routes/usuarios');
app.use('/usuarios', usuariosRoutes);
 
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});