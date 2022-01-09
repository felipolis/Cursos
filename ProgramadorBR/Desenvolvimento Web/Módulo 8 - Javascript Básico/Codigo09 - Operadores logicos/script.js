var a;

// && E
a = true && true;
console.log(a);

a = true && false;
console.log(a);

a = false && true;
console.log(a);

a = false && false;
console.log(a);

// || OU
a = true || true;
console.log(a);

a = true || false;
console.log(a);

a = false || true;
console.log(a);

a = false || false;
console.log(a);

// ! NOT
a = !true;
console.log(a);

a = !false;
console.log(a);

// Exemplo 1
var idade1 = 20;
var maior20 = idade1 > 20;
var menor30 = idade1 < 30;
var entre = maior20 && menor30;

console.log('Maior que 20: ' + maior20);
console.log('Menor que 30: ' + menor30);
console.log('Entre 20 e 30: ' + entre);

// Exemplo 2
var idade2 = 80;
var menor10 = idade2 < 10;
var maior65 = idade2 > 65;
var gratuidade = menor10 || maior65;

console.log('Menor que 10: ' + menor10);
console.log('Maior que 65: ' + maior65);
console.log('Gratuidade: ' + gratuidade);

// Exemplo 3
var idade3 = 40;
var maior30 = idade3 >= 30;
var menor30 = !maior30;

console.log('Maior que 30: ' + maior30);
console.log('Menor que 30: ' + menor30);


