// $ npm init
// $ npm install express
// $ node index.js

const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;


let consoleBody = (req, res, next) => {
    console.log(req.body);
    next();
}

let hello = (req, res) => {
    res.send("Hello World");
}

app.use("/", express.json());
app.use("/", consoleBody);

app.get("/", hello);
app.post("/", hello);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});