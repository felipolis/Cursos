// $ npm init
// $ npm install express
// $ npm install nodemon
// $ nodemon index.js

const express = require('express');
const app = express();
const PORT = 5000;

var aluno = require('./routes/aluno');

app.use(express.urlencoded({ extended: true }));

app.use("/aluno", aluno);

app.get("/", (req, res) => {
    res.send("Hello World");
});


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});