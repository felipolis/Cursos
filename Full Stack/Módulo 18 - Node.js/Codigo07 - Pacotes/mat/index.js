const operacoesBasicas = require('./operacoesBasicas.js');
const areas = require('./areas.js');

module.exports = { ...operacoesBasicas, ...areas };

// $ npm init - Criar nosso pacote
//          name: matematica
//          version: 1.0.0
//          description: Biblioteca de funções matemáticas
//          entry point: index.js
//          test command:
//          git repository:
//          keywords:
//          author:
//          license: (ISC)