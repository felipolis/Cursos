// Exemplo 1
var alunos = new Array("João", "Maria", "José", "Pedro", "Ana");
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
console.log(alunos[3]);
console.log(alunos[4]);
console.log(alunos[5]);

// Exemplo 2
var alunos2 = ["Felipe", "Rubia", "Maria", "Pamella", "Rafael"];
console.log(alunos2);
console.log(alunos2.length);

for(var i = 0; i < alunos2.length; i++){
    console.log(alunos2[i]);
}

for(var i in alunos2){
    console.log(alunos2[i]);
}

for(var aluno of alunos2){
    console.log(aluno);
}