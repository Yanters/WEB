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
app.get('/r/:sublink/:userID', (req, res) => {
    const { sublink, userID } = req.params;
    res.send(`<center><h1>Some directory: "/r/${sublink}"</br>User ID: ${userID}</h1></center>`);
})

app.get('/cats', (req, res) => {
    res.send('<center><h1>/cats <==</h1></center>');
})

app.post('/cats', (req, res) => {
    res.send('<center><h1>Post request to "/cats"</center></h1>');
})

app.get('/dogs', (req, res) => {
    res.send('<center><h1>/dogs <==</h1></center>');
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send(`<h1><center>Are you searching something?</h1></center>`)
    }
    res.send(`<h1><center>Search results to: ${q}</h1></center>`)
    console.log(req.query);
})

app.get('*', (req, res) => {
    res.send('<center><h1>Page not found</br>Error #404</center></h1>');
})

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})