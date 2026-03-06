const express = require('express');

const app = express();
app.use(express.json());    

app.get("/mensagem", (req, res) => {
    res.json({"mensagem": "Bem vindo à API"});
});

app.get("/curso", (req, res) => {
    res.json({"nome":"Desenvolvimento Web", "carga_horaria":"120"});
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Bem vindo à API ${PORT}`);
});

module.exports = app;