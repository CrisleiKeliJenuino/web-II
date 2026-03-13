const hello = (req, res) => {
    res.json({mensagem:"Hello! API funcionando!"});
};

module.exports = {hello};
