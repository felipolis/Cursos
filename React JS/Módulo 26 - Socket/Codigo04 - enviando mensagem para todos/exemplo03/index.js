// npm install
// nodemon index.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const socketIO = require('socket.io');

app.use('/', express.static(path.join(__dirname, 'public')));

const server = app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('Usuário conectado');

    socket.on('disconnect', () => {
        console.log('Usuário desconectado');
    });

    // Envia mensagem para todos os usuários conectados menos o usuário que enviou a mensagem
    socket.broadcast.emit('hello', {msg: `Chegou um novo usuário`}); 

});