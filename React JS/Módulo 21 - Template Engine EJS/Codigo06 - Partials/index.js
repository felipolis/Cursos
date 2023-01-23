// $ npm install
// $ nodemon index.js

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

let users = [
    {
        id: 0,
        name: 'John Winchester',
        phone: '(222) 222-2222',
    },
    {
        id: 1,
        name: 'Sam Winchester',
        phone: '(333) 333-3333',
    },
    {
        id: 2,
        name: 'Dean Winchester',
        phone: '(444) 444-4444',
    }
]

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('user', {
        users: users
    })
})


app.get("/about", (req, res) => {
    res.render('about')
})






app.listen(3000, () => {
    console.log('Server is running on port 3000');
});