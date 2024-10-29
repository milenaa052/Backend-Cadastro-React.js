const bcrypt = require('bcrypt');
const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cadastro_react"
});

db.connect((err) => {
  if (err) throw err;
  console.log("Conectado ao banco de dados!");
});

app.post("/salvarDados", async (req, res) => {
  const { nome, email, dataNasc, telefone, genero, cep, rua, cidade, estado, numero, senha } = req.body;

  delete req.body.confirme;
  delete req.body.termos;

  try {

    const hashedPassword = await bcrypt.hash(senha, 10);

    const sql = 'INSERT INTO usuarios (nome, email, dataNasc, telefone, genero, cep, rua, cidade, estado, numero, senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [nome, email, dataNasc, telefone, genero, cep, rua, cidade, estado, numero, hashedPassword];

    db.query(sql, values, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      return res.status(200).json({ message: 'Dados salvos com sucesso!' });
    });
  } catch (error) {
    console.error("Erro ao criptografar a senha:", error);
    return res.status(500).json({ error: 'Erro ao salvar dados.' });
  }
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
