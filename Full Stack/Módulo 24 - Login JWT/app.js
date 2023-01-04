// npm install
// npm start

require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter');
const mongoose = require('mongoose');
const adminRouter = require('./routes/adminRouter');

app.use('/user', express.json(), userRouter);

app.use("/admin", express.json(), adminRouter);







mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_CONNECTION_URL, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Conectado ao MongoDB');
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
})