

function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Diego", 23),
    novoAluno("Gabriel", 45),
    novoAluno("Lucas", 29),
    novoAluno("João", 35),
]

function idadeDaTurma(total, aluno){
    return total + aluno.idade
}

console.log(alunos.reduce(idadeDaTurma, 0))