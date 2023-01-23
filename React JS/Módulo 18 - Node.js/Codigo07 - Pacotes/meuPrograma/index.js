// $ npm init - Criar nosso pacote
//          name: meuPrograma
//          version: 1.0.0
//          description:
//          entry point: index.js
//          test command:
//          git repository:
//          keywords:
//          author:
//          license: (ISC)

// $ npm install "../mat"

let calc = require('matematica');

console.log(calc.soma(2, 3));
console.log(calc.area_circulo(5));


// Para instalar as dependências de um projeto, basta executar o comando npm install na pasta do projeto. O npm irá ler o arquivo package.json e instalar todas as dependências listadas no arquivo.