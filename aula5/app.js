const express = require('express');

const app = express();
app.use(express.json());    

app.get("./curso", (req, res) => {
    res.json({"nome": "Desenvolvimento Web", "carga_horaria":"1120"});
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});

module.exports = app;