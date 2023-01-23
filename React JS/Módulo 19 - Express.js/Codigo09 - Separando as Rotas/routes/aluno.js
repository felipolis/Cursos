var express = require('express');
var router = express.Router();

let alunos = [
    { id: 1, nome: "João" },
    { id: 2, nome: "Maria" },
    { id: 3, nome: "José" }
]

router.get("/", (req, res, next) => {
    console.log(req.body);
    
    let aluno = alunos.find(a => a.id == req.body.id);
    if (aluno) {
        res.json(aluno)
    } else {
        next();
    }
})

router.get("/", (req, res, next) => {
    console.log(req.query);
    
    let aluno = alunos.find(a => a.id == req.query.id);
    if (aluno) {
        res.json(aluno)
    } else {
        res.send("Aluno não encontrado");
    }
})

router.get("/all", (req, res) => {
    res.json(JSON.stringify(alunos));
});

router.get("/:id", (req, res) => {
    console.log(req.params);
    let aluno = alunos.find(a => a.id == req.params.id);
    res.json(aluno)
});

module.exports = router;