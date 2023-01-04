// npm install
// nodemon app.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const linkRoute = require('./routes/linkRoute');
const path = require('path');

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost/newLinks')

let db = mongoose.connection;

db.on('error', () => { console.log('Houve um erro') })
db.once('open', () => { console.log('Conexão estabelecida') })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use("/", linkRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});