const express = require('express');

const app = express();

const port = 3000;

// app.use((req, res) => {
//     console.log('New request.');
//     res.send('Hi there!');
// })
app.get('/', (req, res) => {
    res.send('<center><h1>Look at the "/cats" or "/dogs" ;)</h1></center>')
})

app.get('/r/:sublink', (req, res) => {
    const { sublink } = req.params;
    res.send(`<center><h1>Some directory: "/r/${sublink}"</h1></center>`);
})

app.get('/cats', (req, res) => {
    res.send('<h1>/cats <==</h1>');
})

app.post('/cats', (req, res) => {
    res.send('Post request to "/cats"');
})

app.get('/dogs', (req, res) => {
    res.send('<h1>/dogs <==</h1>');
})
app.get('*', (req, res) => {
    res.send('<center><h1>Page not found</br>Error #404</center></h1>');
})

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})