const hello = (req, res) => {
  res.json({
    mensage: "Hello! API funcionando!"
  });
};

module.exports = {
  hello
};
