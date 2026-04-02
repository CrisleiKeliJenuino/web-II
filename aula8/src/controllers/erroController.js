exports.erro = (req, res) => {

    // Só pra "usar" req.body e req.query (mesmo sem precisar)
    console.log(req.body);
    console.log(req.query);

    return res.status(500).json({
        erro: "Erro interno simulado"
    });
};
