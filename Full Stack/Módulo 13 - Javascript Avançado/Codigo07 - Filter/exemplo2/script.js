

function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Diego", 23),
    novoAluno("Gabriel", 45),
    novoAluno("Lucas", 29),
    novoAluno("João", 35),
];

let jogadores = [
    novoAluno("Marcos", 23),
    novoAluno("Pedro", 45),
    novoAluno("Rafa", 29),
    novoAluno("Felipe", 35),
];

console.log(alunos);

function temMenosDe30(aluno){
    return aluno.idade < 30;
}

function temMaisDe30(aluno){
    return aluno.idade > 30;
}

function filtro(callback){

    let alunosFiltrados = [];

    for(let aluno of this){
        if(callback(aluno)){
            alunosFiltrados.push(aluno);
        }
    }

    return alunosFiltrados;
}

alunos.filtro = filtro;
console.log(alunos.filtro(temMenosDe30));

jogadores.filtro = filtro;
console.log(jogadores.filtro(temMaisDe30));