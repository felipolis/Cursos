// $ npm init
// $ npm install express
// $ node index.js

const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

let consoleMethod = (req, res, next) => {
    console.log(req.method);
    next();
}

let hello = (req, res) => {
    res.send("Hello World");
}

app.get("/", consoleMethod);
app.get("/", hello);

app.post("/", consoleMethod, hello);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});