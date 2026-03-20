exports.criarUsuario = (req, res) => {
  const { nome, email, idade } = req.body;

//Validação do nome
if(!nome || nome.length < 3){
    return res.status(400).json({ 
        sucess: false,
        error: "O nome é obrigatório e deve ter pelo menos 3 caracteres." 
    });
}

//Validação do email
if(!email || !email.includes('@')){
    return res.status(400).json({ 
        sucess: false,
        error: "Email inválido." 
    });
}

// Validação da idade
if (!idade || idade < 0 || idade > 120) {
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
