const http = require('http');


http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World!');
}).listen(3000, (err) => {
    if (err) {
        console.log('Erro ao iniciar o servidor');
    } else {
        console.log('Servidor rodando na porta 3000');
    }
});