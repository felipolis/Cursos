const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');

router.get('/', auth, (req, res) => {
    if(req.user.admin){
        res.send("Esse dado só pode ser visto pelo admin");
    } else {
        res.status(401).send("Não admin: Acesso negado");
    }
})

router.get('/free', auth, (req, res) => {
    res.send("Esse dado pode ser visto por quem estiver logado");
})


module.exports = router;