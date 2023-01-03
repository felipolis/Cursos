// $ npm init
// $ npm install express
// $ npm install nodemon
// $ nodemon index.js

const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));

let alunos = [
    { id: 1, nome: "João" },
    { id: 2, nome: "Maria" },
    { id: 3, nome: "José" }
]

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/alunos", (req, res) => {
    res.json(JSON.stringify(alunos));
});

app.get("/aluno", (req, res) => {
    console.log(req.body);
    let aluno = alunos.find(a => a.id == req.body.id);
    res.json(aluno)
})

/* app.get("/aluno", (req, res) => {
    console.log(req.query);
    let aluno = alunos.find(a => a.id == req.query.id);
    res.json(aluno)
}) */

app.get("/aluno/:id", (req, res) => {
    console.log(req.params);
    let aluno = alunos.find(a => a.id == req.params.id);
    res.json(aluno)
});


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});