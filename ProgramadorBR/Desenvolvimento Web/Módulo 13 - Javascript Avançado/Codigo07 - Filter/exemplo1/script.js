

function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Diego", 23),
    novoAluno("Gabriel", 45),
    novoAluno("Lucas", 29),
    novoAluno("João", 35),
]

console.log(alunos);

function temMenosDe30(aluno){
    return aluno.idade < 30;
}

function temMaisDe30(aluno){
    return aluno.idade > 30;
}

let a = alunos.filter(temMenosDe30);
console.log(a);