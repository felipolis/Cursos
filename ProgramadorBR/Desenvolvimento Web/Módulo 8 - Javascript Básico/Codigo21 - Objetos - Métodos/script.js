function calcMedia() {
    return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
    nome: "Felipe",
    notas: [7, 8],

    media: calcMedia
    /* media: function() {
        return (this.notas[0] + this.notas[1]) / 2;
    } */
}

var aluno1 = {
    nome: "João",
    notas: [6, 8],

    media: calcMedia
    /* media: function() {
        return (this.notas[0] + this.notas[1]) / 2;
    } */
}

console.log(aluno.nome)
console.log(aluno.media())

console.log(aluno1.nome)
console.log(aluno1.media())