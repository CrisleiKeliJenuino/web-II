const express = require('express');
const app = express();

app.use(express.json());

const usuariosRouter = require('./routes/usuarios');
app.use('/usuarios', usuariosRouter);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});