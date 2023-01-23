// $ npm init
// $ npm install express
// $ node index.js

const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

app.use("/meusite", express.static(path.join(__dirname, 'client')));

app.get("/", (req, res) => {
    //res.set("Content-Type", "text/html"); 
        // text/html
        // text/plain
        // application/json
    
    res.type('html');
        // res.type('.html') => 'text/html'
        // res.type('html') => 'text/html'
        // res.type('txt') => 'text/plain'
        // res.type('json') => 'application/json'
        // res.type('application/json') => 'application/json'
        // res.type('png') => 'image/png'

    res.send("<h1> Hello World from GET </h1>");
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});