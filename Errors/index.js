const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const AppError = require('./AppError');
const { stat } = require('fs');


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
    // res.send('Sorry you need a password \n http://localhost:3000/secret?password=somePassword')
    throw new AppError('Password required!', 402);
})

app.get('/', (req, res) => {
    res.send('Working!')
})

app.get('/dogs', (req, res) => {
    res.send('Woof! Woof!')
})

app.get('/error', (req, res) => {
    chicken.fly();
})


//middleware ( verifyPassword )
app.get('/secret', verifyPassword, (req, res) => {
    res.send('My secret is: ***** **** ******* ** *****');
})

app.use((req, res) => {
    res.status(404).send('Not found');
})

// app.use((err, req, res, next) => {
//     console.log('******************************************')
//     console.log('*******************ERROR******************')
//     console.log('******************************************')
//     // res.status(500).send('Error');
//     next(err);
// })

app.use((err, req, res, next) => {
    const { status = 500, message = 'Not found' } = err.status;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log('Working on port: 3000');
})

