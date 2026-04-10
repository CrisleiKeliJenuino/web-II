const sql = require("mssql");

const config = {
    user: "web",
    password: "123456",
    server: "187.85.207.115",
    database: "aula",
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};  

async function getConnection() {
  try {
    return await sql.connect(config);
  } catch (err) {
    console.log("Erro ao conectar:", err);
  }
}

module.exports = { sql, getConnection };
