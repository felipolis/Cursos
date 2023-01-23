

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
    let novoAluno = aluno;
    novoAluno.idade += 10;
    return novoAluno;
}

console.log(alunos.map(nomeIdade));
console.log(alunos);