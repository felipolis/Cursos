// $ node script.js tipo valor1 valor2

let calc = require('./calc');

console.log(calc.soma(3, 2));
console.log(calc.mult(3, 2));

let mult = require('./calc').mult;
console.log(mult(5, 7));


