exports.login = (req, res) => {
    const{usuario, senha} = req.body

    if (!usuario || !senha) {
        return res.status(400).json({
            success: false,
            error: 'Os campos usuario e senha são obrigatórios.'
        });
    }

    //Se todas as validações passarem, retorna uma resposta de sucesso
    return res.status(201).json({
        success: true,
        message: "Login realizado com sucesso",
        data:{
            usuario,
            senha
        }
    });
}