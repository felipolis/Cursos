// 1º Forma de criar um objeto
var a = {
    nome: "Pedro",
    sobrenome: "Silva"
}

console.log(a.nome);
console.log(a.sobrenome);

// 2º Forma de criar um objeto
function objeto(nome, sobrenome) {
    return {
        nome: nome,
        sobrenome: sobrenome
    }
}

var o1 = objeto("Pedro", "Silva");
console.log(o1.nome);
console.log(o1.sobrenome);

// 3º Forma de criar um objeto
function objeto2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

var o2 = new objeto2("Pedro", "Silva");
console.log(o2.nome);
console.log(o2["sobrenome"]);