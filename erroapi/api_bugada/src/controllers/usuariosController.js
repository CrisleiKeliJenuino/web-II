const listarUsuarios = (req, res) => {
  req.json({
    mensagem: "Rota de usuários funcionando!"
  });
};

module.exports = {listarUsuarios};