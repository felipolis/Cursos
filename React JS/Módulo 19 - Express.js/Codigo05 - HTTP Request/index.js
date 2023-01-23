// $ npm init
// $ npm install express
// $ node index.js

const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

app.use("/meusite", express.static(path.join(__dirname, 'client')));

// Realizar requisição no insominia
app.get("/", (req, res) => {
    console.log(req);
    res.send("<h1> Hello World</h1>");
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});