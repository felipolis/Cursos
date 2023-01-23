// $ npm init -y
// $ npm install express

const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

app.use("/meusite", express.static(path.join(__dirname, 'client')));

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});