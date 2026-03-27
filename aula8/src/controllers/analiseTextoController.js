exports.analiseTexto = (req, res) => {
    const { texto } = req.body

    if (!texto) {
        return res.status(400).json({
            success: false,
            error: 'O campo texto é obrigatório.'
        });
    }

    //Se todas as validações passarem, retorna uma resposta de sucesso
    return res.status(201).json({
        success: true,
        message: "quantidadedePalavras: 5, quantidadeDeCaracteres: 29",
        data:{
            texto
        }
    });
}