let alunoA = {
    nome: "Diego",
    idade: 23
}
let alunoB = Object.assign({}, alunoA); // ou alunoB = {...alunoA};
alunoB.idade = 24;

console.log(alunoA.idade);
console.log(alunoB.idade);


let turmaA = ["Diego", "Gabriel", "Lucas"];
let turmaB = turmaA.slice(); // ou turmaB = [...turmaA];
turmaB.push("Jorge");

console.log(turmaA);
console.log(turmaB);