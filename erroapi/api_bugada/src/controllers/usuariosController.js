const listarUsuarios = (req, res) => {
  res.json({
    mensagem: "Rota de usuários funcionando!"
  });
};

module.exports = {listarUsuarios};