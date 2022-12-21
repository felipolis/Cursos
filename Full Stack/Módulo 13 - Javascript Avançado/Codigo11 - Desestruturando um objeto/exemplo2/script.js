var aluno = {
    matricula: 123,
    nome: 'Maria',
    telefone: '9999-9999',
    cidade: 'São Paulo'
}

var { ...copia } = aluno; 
copia.matricula = 456;
console.log(copia);
console.log(aluno);