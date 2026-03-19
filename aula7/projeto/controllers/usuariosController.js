exports.criarUsuario = (req, res) => {
  const { nome, email } = req.body;

//Validação do nome
if(!nome){
    return res.status(400).json({ 
        sucess: false,
        error: "O nome é obrigatório." 
    });
}

//Validação do email
if((!email) || !email.includes('@')){
    return res.status(400).json({ 
        sucess: false,
        error: "Email inválido." 
    });
}

// Validação da idade
if (!idade || idade < 0){
    return res.status(400).json({
        sucess: false,
        error: "Idade inválida."
    });         
}

//Se tudo estiver correto
return res.status(201).json({
    sucess: true,
    message: "Usuário criado com sucesso!",
    data: {
        nome, email, idade
    }
});
}
