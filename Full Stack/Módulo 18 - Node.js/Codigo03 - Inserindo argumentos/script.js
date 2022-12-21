// $ node script.js tipo valor1 valor2

function soma(x, y){
    return x + y;
}

function multiplicacao(x, y){
    return x * y;
}

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


