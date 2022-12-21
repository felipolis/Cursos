let fs = require('fs');

// Criar um arquivo
fs.writeFile('./arquivo.txt', 'Hello World', function(err){
    if (err) throw err;
    console.log("Arquivo criado com sucesso!");
});

// Adicionar conteúdo a um arquivo
setTimeout(function(){
    fs.appendFile('./arquivo.txt', ' - disse ele', function(err){
        if (err) throw err;
        console.log("Arquivo atualizado com sucesso!");
    });
}, 2000);

// Renomear um arquivo
setTimeout(function(){
    fs.rename('./arquivo.txt', './arquivo2.txt', function(err){
        if (err) throw err;
        console.log("Arquivo renomeado com sucesso!");
    });
}, 2000);

// ler o arquivo depois de 2 segundos
setTimeout(function(){
    fs.readFile('./arquivo2.txt', 'UTF8', function(err, data){
        if (err) throw err;
        console.log(data.toString());
    });
}, 2000);


// Apagar um arquivo
setTimeout(function(){
    fs.unlink('./arquivo2.txt', function(err){
        if (err) throw err;
        console.log("Arquivo apagado com sucesso!");
    });
}, 10000);
