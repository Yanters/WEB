const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');



app.use(morgan('common'));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

// http://localhost:3000/x?password=somePassword
const verifyPassword = ((req, res, next) => {
    const { password } = req.query;
    if (password === 'somePassword') {
        return next();
    }
    res.send('Sorry you need a password \n http://localhost:3000/secret?password=somePassword')
})

app.get('/', (req, res) => {
    res.send('Working!')
})

app.get('/dogs', (req, res) => {
    res.send('Woof! Woof!')
})

//middleware ( verifyPassword )
app.get('/secret', verifyPassword, (req, res) => {
    res.send('My secret is: ***** **** ******* ** *****');
})

app.use((req, res) => {
    res.status(404).send('Not found');
})

app.listen(3000, () => {
    console.log('Working on port: 3000');
})

