function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Diego", 23),
    novoAluno("Gabriel", 45),
    novoAluno("Lucas", 29),
    novoAluno("João", 35),
];

// Criando o filter

function temMenosDe30(aluno){
    return aluno.idade < 30;
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


// Criando o map

function nomeIdade(aluno){
    return aluno.nome + " tem " + aluno.idade + " anos";
}

function mapa(callback){

    let alunosMapeados = [];

    for(let aluno of this){
        alunosMapeados.push(callback(aluno));
    }

    return alunosMapeados;
}

alunos.mapa = mapa;
console.log(alunos.mapa(nomeIdade));


// Criando o reduce

function idadeDaTurma(total, aluno){
    return total + aluno.idade
}

function reduz(callback, inicial){

    let total = inicial;

    for(let aluno of this){
        total = callback(total, aluno);
    }

    return total;
}

alunos.reduz = reduz;
console.log(alunos.reduz(idadeDaTurma, 0));

