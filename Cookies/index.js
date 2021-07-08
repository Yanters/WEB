const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('secret'));

app.get('/greet', (req, res) => {
    const { name = 'No-name' } = req.cookies;
    res.send(`Hey there ${name}!`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'john bravo')
    res.send('Sending a cookie!')
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'apple', { signed: true })
    res.send('Sending a signed cookie!')
})

app.get('/verifyfruit', (req, res) => {
    console.log(req.signedCookies);
    res.send(req.signedCookies);
})

app.listen(3000, () => {
    console.log('Working on port: 3000')
})