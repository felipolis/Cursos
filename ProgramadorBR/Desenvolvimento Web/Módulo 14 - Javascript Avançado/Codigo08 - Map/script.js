

function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Diego", 23),
    novoAluno("Gabriel", 45),
    novoAluno("Lucas", 29),
    novoAluno("João", 35),
]


function nomeIdade(aluno){
    return aluno.nome + " tem " + aluno.idade + " anos";
}

console.log(alunos.map(nomeIdade));