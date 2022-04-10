var aluno = {
    matricula: 1234,
    nome: 'Maria',
    telefone: '9999-9999',
    cidade: 'São Paulo'
}

var aluno1 = {
    matricula: 1235,
    nome: 'Pedro',
    telefone: '8888-8888',
    cidade: 'São Paulo'
}

var aluno2 = {
    matricula: 1236,
    nome: 'Jose',
    telefone: '7777-7777',
    cidade: 'São Paulo'
}

var alunos = [aluno, aluno1, aluno2];

var [ maria, ...outros ] = alunos;

console.log(maria);
console.log(outros);