// npm install
// nodemon index.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const socketIO = require('socket.io');

app.use('/', express.static(path.join(__dirname, 'public')));

const randoms = [];

const server = app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('Usuário conectado');

    socket.on('disconnect', () => {
        console.log('Usuário desconectado');
    });

    // Gera um número aleatório e adiciona no array
    const random = Math.random();
    console.log(random);
    randoms.push(random);

    // Envia mensagem para todos os usuários conectados
    io.emit('hello', {msg: `Hello World ${randoms}`}); 

    socket.on('hello_client_response', (data) => {
        console.log(data.msg);
    });
});