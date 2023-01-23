// $ npm install
// $ nodemon index.js

const express = require('express');
const fs = require('fs');
const app = express();

let user = {
    id: 0,
    name: 'John Winchester',
    phone: '(222) 222-2222',
}

function render(data, obj){
    for (let key in obj){
        data = data.replace(`{{{${key}}}}`, obj[key]);
    }
    return data;
}

app.get("/", (req, res) => {
    fs.readFile('./templates/user.html', 'UTF8', (err, data) => {
        if (!err) {
            data = render(data, user);
            res.send(data);
        }
    })
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});