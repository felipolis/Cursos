//---------------------Exemplo1---------------------

/*
var calcMedia = function(){
    return (this.nota1 + this.nota2) / 2;
}

var turma = [
    {
        nome: "Felipe",
        nota1: 7,
        nota2: 8,
        media: calcMedia
    },
    {
        nome: "João",
        nota1: 6,
        nota2: 8,
        media: calcMedia
    }
]

var aluno1 = turma[0];
console.log(aluno1.nome)
console.log(aluno1.media())

var aluno2 = new aluno("João", 6, 8);
console.log(aluno2.nome)
console.log(aluno2.media())
*/

//---------------------Exemplo2---------------------

/*
function criarAluno(nome, n1, n2){
    var aluno =  {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return (this.nota1 + this.nota2) / 2;
        }
    }

    return aluno;
}

var turma = [
    criarAluno("Pedro", 7, 8),
    criarAluno("João", 6, 8),
    criarAluno("Maria", 7, 8),
    criarAluno("José", 6, 8)
]

var aluno = criarAluno("Felipe", 7, 8);
console.log(aluno.nome);
console.log(aluno.media());

turma.forEach(function(elemento){
    console.log(elemento.nome);
    console.log(elemento.media());
})

for(var aluno of turma){
    console.log(aluno.nome);
    console.log(aluno.media());
}
*/


//---------------------Exemplo3---------------------
function aluno(nome, n1, n2){
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;
    this.media = function(){
        return (this.nota1 + this.nota2) / 2;
    }
}

var a1 = new aluno("Pedro", 7, 8);
console.log(a1);
console.log(a1.nome);

var a2 = new aluno("João", 6, 8);
console.log(a2);
console.log(a2.nome);