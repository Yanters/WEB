const express = require('express');
const app = express();
const session = require('express-session');

const sessionOptions = {
    secret: 'thisisnotagoodsecret',
    resave: false,
    saveUninitialized: false
}
app.use(session(sessionOptions));

app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`You have viewed this site ${req.session.count} times.`)
})

app.get('/register', (req, res) => {
    const { username = 'Anonymous' } = req.query;
    req.session.username = username;
    res.redirect('/greet')
})

app.get('/greet', (req, res) => {
    const { username = 'Anonymous' } = req.session;
    res.send(`Hello there, ${username}`);

})

app.listen(3000, () => {
    console.log('Working on port: 3000')
})