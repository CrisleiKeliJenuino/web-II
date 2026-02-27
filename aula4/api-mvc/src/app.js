const esxpress = require("express");
const app = express();

//Permite receber JSON no body (POST/PUT)
app.use(express.json());

//Rotas (módulos)
const alunosRoutes = requite("./routes/alunosRoutes");
const produtosRoutes = require(";/routes/produtosRoutes");

// Prefixos das rotas
app.use("/alunos", alunosRoutes);
app.use("/produtos", produtosRoutes);

//Rota de teste/boas-vindas
app.get("/", (req, res) => {
    res.send("API MVC funcionando");
});

module.exports = app;