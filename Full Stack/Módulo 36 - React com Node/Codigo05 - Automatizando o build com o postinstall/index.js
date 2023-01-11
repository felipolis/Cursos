const express = require('express');
const app = express();
const PORT = 3000
const path = require('path');

require('dotenv').config();

const videos = [
    "8kooIgKESYE&t",
    "clCFh5rbAIk",
    "Kv16hKExUto",
    "WBOMpfxsUpk",
    "XHeU1IHINFQ"
]


app.get("/api/videos", (req, res) => {
    res.send(videos);
});

if(process.env.NODE_ENV != 'development'){
    app.use(express.static(path.join(__dirname, 'front/build')));
    
    app.use("*", (req, res) => {
        res.sendFile(path.join(__dirname, 'front/build/index.html'), (error) => {
            if (error) {
                res.status(500).send
            }
        });
    })
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});