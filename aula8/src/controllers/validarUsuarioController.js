exports.validarUsuario = (req, res) => {
    const {nome, email, idade} = req.body

    //Validação do nome
    if(!nome){
        return res.status(400).json({
        sucess: false,
        error: 'O Nome é obrigatório.'});
    }

   //Validação do email
    if(!email || !email.includes("@")){
        return res.status(400).json({
        success: false,
        error:"Email inválido"
        });
    }

    //Validação da idade
    if (!idade || idade < 18) {
        return res.status(400).json({
            success: false,
            error: "Idade inválida"
        });
    }


    //Se todas as validações passarem, retorna uma resposta de sucesso
    return res.status(201).json({
        success: true,
        message: "Usuário criado com sucesso",
        data: {
            nome,
            email,
            idade
        }
    });
}