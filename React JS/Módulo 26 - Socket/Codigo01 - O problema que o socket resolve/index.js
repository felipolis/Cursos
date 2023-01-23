// npm install
// nodemon index.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const list = ['José', 'Marcos', 'Maria'];

console.log(list);

setTimeout(() => {
    list.push('João');
    console.log(list);
}, 5000);

app.get('/list', (req, res) => {
    res.send(list);
});

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});