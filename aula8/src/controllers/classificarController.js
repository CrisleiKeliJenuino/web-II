exports.classificar = (req, res) => {
    const {valor} = req.body;

    const num = Number(valor);

    if(isNaN(num)) {
        return res.status(400).json({
            success: false,
            erro: "Valor inválido"
        });
    }

    let classificacao;

    if (num < 50){
        classificacao = "Reprovado";
    }
    else if (num >= 50 && num <= 69){
        classificacao = "Recuperação";
    }
    else {
        classificacao = "Aprovado"
    }
        
    return res.status(200).json({
        sucess: true,
        message: `O aluno foi ${classificacao}`
    });
};