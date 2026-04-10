const { getConnection, sql } = require("../db");

exports.getUsuarios = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Usuarios");

    res.json(result.recordset);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.getUsuarioById = async (req, res) => {
  try {
    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool.request()
      .input("id", sql.Int, id)
      .query("SELECT * FROM Usuarios WHERE id = @id");

    if (result.recordset.length === 0) {
      return res.status(404).json({
        erro: "Usuário não encontrado"
      });
    }

    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};


exports.postUsuarios = async (req, res) => {
  try {
    const { nome, email } = req.body;

    const pool = await getConnection();

    await pool.request()
      .input("nome", sql.VarChar, nome)
      .input("email", sql.VarChar, email)
      .query(`
        INSERT INTO Usuarios (nome, email)
        VALUES (@nome, @email)
      `);

    res.status(201).json({
      sucesso: true,
      mensagem: "Usuário cadastrado com sucesso"
    });

  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.putUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email } = req.body;

    const pool = await getConnection();
    const result = await pool.request()
      .input("id", sql.Int, id)
      .input("nome", sql.VarChar, nome)
      .input("email", sql.VarChar, email)
      .query(`
        UPDATE Usuarios
        SET nome = @nome, email = @email
        WHERE id = @id
      `);

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    res.json({
      sucesso: true,
      mensagem: "Usuário atualizado"
    });

  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool.request()
      .input("id", sql.Int, id)
      .query("DELETE FROM Usuarios WHERE id = @id");

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    res.json({
      sucesso: true,
      mensagem: "Usuário deletado"
    });

  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};