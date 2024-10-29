# Backend-Cadastro-React.js

Backend criado para o projeto de Cadastro com React.js: https://github.com/milenaa052/Cadastro-React.js

### `node server.js`

Comando para executar o backend

### `npm install`

Comando para instalar a pasta node_modules

## Comandos do Banco de dados

`CREATE DATABASE cadastro_react;`

`USE cadastro_react;`

`CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    dataNasc DATE,
    telefone VARCHAR(20),
    genero VARCHAR(20),
    cep VARCHAR(20),
    estado VARCHAR(15),
    cidade VARCHAR(50),
    rua VARCHAR(100),
    numero INT,
    senha VARCHAR(100)
);
`