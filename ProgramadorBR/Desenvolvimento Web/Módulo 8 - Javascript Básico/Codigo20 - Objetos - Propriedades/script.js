var aluno = {
    nome: 'João',
    notas: [7.0, 6.5, 8.5]
};

console.log(aluno);

console.log(aluno.nome);
console.log(aluno['nome']);

console.log(aluno.notas);
console.log(aluno['notas'][1]);

aluno.matricula = '12345';
console.log(aluno);

aluno['sobrenome'] = 'Silva';
console.log(aluno);

var nomeDeUmaNovaPropriedade = 'livro favorito';
aluno[nomeDeUmaNovaPropriedade] = 'Harry Potter';
console.log(aluno);
