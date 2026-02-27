// Banco fake (temporário). Depois você troca por SQL, Mongo etc.
const alunos = [];

//GET /alunos
exports.listar = (req, res) => {
    return res.json(alunos);
};

//POST /alunos
exports.criar = (req, res) => {
    const {nome, idade} = req.body || {};

// validação simples (didática)
if (!nome) {
    return res.status(400).json({error: "nome obrigatório"});
}

const novo = {
    id: alunos.length + 1,
    nome,
    idade: idade ?? null,
};

alunos.push(novo);
return res.status(201).json(novo);
};