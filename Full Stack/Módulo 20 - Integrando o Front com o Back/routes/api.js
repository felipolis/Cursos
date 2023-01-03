const express = require('express');
const router = express.Router();
const cors = require('cors');
const posts = require('../model/posts');

const options = {
    origin: "http://localhost:3000"
}

router.use(cors(options));

router.post("/new", express.json(), (req, res) => {
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);

    res.send("Post criado com sucesso");
})

router.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()));
})

module.exports = router;