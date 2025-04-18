const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.get('/posts', (req, res) => {
    res.send('Lista dei post');
});

app.get('/posts:id', (req, res) => {
    res.send(`Dettagli del post ${req.params.id}`);
});

app.listen(port, () => {
    console.log(`App in ascolto sulla porta ${port}`);
})