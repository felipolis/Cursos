// $ node script.js tipo valor1 valor2

let soma = require('./soma');
let mult = require('./mult');

let args = process.argv.slice(2);

let a = Number(args[1]);
let b = Number(args[2]);
let c = '';

if (args[0] == 's'){
    c = soma(a, b);
} else if (args[0] == 'm'){
    c = multiplicacao(a, b);
} else {
    c = 'Operação inválida';
}

console.log(c);


