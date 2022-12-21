const http = require('http');


http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write(JSON.stringify({nome: 'João', idade: 20}));
}).listen(3000, (err) => {
    if (err) {
        console.log('Erro ao iniciar o servidor');
    } else {
        console.log('Servidor rodando na porta 3000');
    }
});