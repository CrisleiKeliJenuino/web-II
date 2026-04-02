const express = require('express');
const app = express();  

app.use(express.json());

const validarUsuarioRoutes = require('./routes/validarUsuario');
app.use('/validarUsuario', validarUsuarioRoutes);

const formatarRoutes = require('./routes/formatar');
app.use('/formatar', formatarRoutes);

const analiseTextoRoutes = require('./routes/analiseTexto');
app.use('/analiseTexto', analiseTextoRoutes);

const loginRoutes = require('./routes/login');
app.use('/login', loginRoutes);

const calcularRoutes = require('./routes/calcular');
app.use('/calcular', calcularRoutes);

const classificarRoutes = require('./routes/classificar');
app.use('/classificar', classificarRoutes);

const erroRoutes = require('./routes/erro');
app.use('/erro', erroRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

module.exports = app;