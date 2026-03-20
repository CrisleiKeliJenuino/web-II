exports.validarLogin = (req, res) => {
  const { email, senha } = req.body;

  // Validação do email
  if (!email || email !== 'maria@email.com') {
    return res.status(400).json({
      success: false,
      error: "Email inválido."
    });
  }

  // Validação da senha
  if (!senha || senha !== 123456) {
    return res.status(400).json({
      success: false,
      error: "Senha inválida."
    });
  }

  // Se tudo estiver correto
  return res.status(200).json({
    success: true,
    message: "Login realizado com sucesso!"
  });
};
