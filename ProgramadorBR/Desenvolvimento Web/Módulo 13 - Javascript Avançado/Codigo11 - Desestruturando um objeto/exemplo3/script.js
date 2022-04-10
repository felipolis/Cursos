var aluno = {
    matricula: 123,
    nome: 'Maria',
    telefone: '9999-9999',
    cidade: 'São Paulo'
}

const { matricula, nome, ...resto } = aluno;
console.log(matricula);
console.log(nome);
console.log(resto);