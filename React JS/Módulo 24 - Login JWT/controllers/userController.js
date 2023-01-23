const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { loginValidate, registerValidate } = require('../controllers/validate');

const userController = {
    register: async (req, res) => {

        const { error } = registerValidate(req.body);
        if (error) {
            return res.status(400).send(error.message);
        }

        const selectedUser = await User.findOne({ email: req.body.email });
        if (selectedUser) {
            return res.status(400).send('Email já cadastrado');
        }

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password)
        });

        try {
            const savedUser = await user.save();
            res.send(savedUser);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    login: async (req, res) => {

        const { error } = loginValidate(req.body);
        if (error) {
            return res.status(400).send(error.message);
        }

        const selectedUser = await User.findOne({ email: req.body.email });
        if (!selectedUser) {
            return res.status(400).send('Email ou senha inválidos');
        }

        const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password);
        if (!passwordAndUserMatch) {
            return res.status(400).send('Email ou senha inválidos');
        }

        const token = jwt.sign({ _id: selectedUser._id, admin: selectedUser.admin }, process.env.TOKEN_SECRET);

        res.header('authorization-token', token);
        res.send('Login realizado com sucesso');
    }
}


module.exports = userController;