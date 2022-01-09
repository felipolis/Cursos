// Exemplo 1
function saudacao() {
    return "Olá, mundo!";
}

var s = saudacao;
console.log(s());

// Exemplo 2
var media = function (n1, n2) {
    return (n1 + n2) / 2;
}

console.log(media(10, 5));