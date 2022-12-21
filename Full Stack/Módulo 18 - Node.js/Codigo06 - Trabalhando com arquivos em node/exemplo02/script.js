// node script.js NOME_ARQUIVO

let fs = require('fs');

let args = process.argv.slice(2);

let fileName = args[0];

fs.readFile(fileName, 'UTF8', function(err, data){
    if (err) throw err;
    
    fs.writeFile('./' + fileName + '_Uppercase', data.toUpperCase(), function(err){
        if (err) throw err;
        console.log('Arquivo gerado com sucesso!');
    });
});