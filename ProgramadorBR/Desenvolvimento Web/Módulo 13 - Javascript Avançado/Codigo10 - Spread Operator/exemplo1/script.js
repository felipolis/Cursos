var pessoa = {
    nome: 'João',
    idade: 20
}

var contato = {
    telefone: '123456789',
    email: 'joao@gmail.com'
}

var copia = { ...pessoa, cidade: 'São Paulo', ...contato }
copia.idade = 30;

console.log(pessoa);
console.log(copia);