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

app.post("/salvarDados", (req, res) => {
  const dados = req.body;
  delete dados.confirme;
  delete dados.termos;

  console.log('Dados recebidos:', req.body);

  const sql = "INSERT INTO usuarios SET ?";

  db.query(sql, dados, (error, results) => {
    if (error) {
      console.error("Erro ao salvar dados:", error);
      res.status(500).send("Erro ao salvar dados");
    } else {
      res.send("Dados salvos com sucesso");
    }
  });
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
