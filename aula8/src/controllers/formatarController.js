exports.formatar = (req, res) => {
    const {nome, telefone} = req.body

    //Validação do nome
    if(!nome){
        return res.status(400).json({
        sucess: false,
        error: 'O Nome é obrigatório.'});
    }
    
    //Validação do telefone
    if(!telefone || telefone.length !== 14){
        return res.status(400).json({
        success: false,
        error:"Telefone inválido"
        });
    }

    //Se todas as validações passarem, retorna uma resposta de sucesso
    return res.status(201).json({
        success: true,
        message: "Usuário criado com sucesso",
        data: {
            nome,
            telefone
        }
    });
}