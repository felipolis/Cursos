// $ npm install
// $ nodemon index.js

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

let user = {
    name: 'John Winchester',
    phone: '(222) 222-2222',
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('user', user)
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});