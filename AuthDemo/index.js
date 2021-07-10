const express = require('express');
const app = express();
const path = require('path');
const User = require('./models/user');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/register', (req, res) => {
    res.render('register')
})
app.get('/secret', (req, res) => {
    res.send('Secret only for people who are logged.')
})

app.listen(3000, () => {
    console.log('Working on port: 3000');
})