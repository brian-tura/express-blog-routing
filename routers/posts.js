const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.get('/posts', (req, res) => {
    res.send('Lista dei post');
});

app.get('/posts/:id', (req, res) => {
    res.send(`Dettagli del post ${req.params.id}`);
});

app.post('/posts', (req, res) => {
    res.send('Creazione nuovo post');
});

app.put('/posts/:id', (req, res) => {
    res.send(`Modifica integrale del post ${req.params.id}`);
});

app.patch('/posts/:id', (req, res) => {
    res.send(`Modifica parziale del post ${req.params.id}`);
});

app.delete('/posts/:id', (req, res) => {
    res.send(`Eliminazione del post ${req.params.id}`);
});

app.listen(port, () => {
    console.log(`App in ascolto sulla porta ${port}`);
})