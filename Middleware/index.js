const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');



app.use(morgan('common'));

// http://localhost:3000/x?password=somePassword
const verifyPassword = ((req, res, next) => {
    const { password } = req.query;
    if (password === 'somePassword') {
        next();
    }
    res.send('Not for you ;)\nhttp://localhost:3000/secret?password=somePassword')
})

app.get('/', (req, res) => {
    res.send('Working!')
})

app.get('/dogs', (req, res) => {
    res.send('Woof! Woof!')
})

//middleware ( verifyPassword )
app.get('/secret', verifyPassword, (req, res) => {
    res.send('My secret is: ***** **** ******* ** *****')
})

app.use((req, res) => {
    res.status(404).send('Not found');
})

app.listen(3000, () => {
    console.log('Working on port: 3000');
})

