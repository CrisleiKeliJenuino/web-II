const hello = (req, res) => {
  res.status(201).json({
    mensage: "Hello! API funcionando!"
  });
};

module.export = {
  hello
};
