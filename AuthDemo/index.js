const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const User = require('./models/user');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost:27017/authDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to DB.');
    })
    .catch(err => {
        console.log('Error: ', err);
    })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Go to /register')
})
app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username: username,
        password: hash
    })
    await user.save();
    res.redirect('/');
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    const { password, username } = req.body;
    const user = await User.findOne({ username: username });
    if (!user) res.send('Wrong username or password');
    const validPassword = await bcrypt.compare(password, user.password);
    console.log(`ValidPassword: ${validPassword}`)
    console.log(`user: ${user}`)
    console.log(`password: ${password}`)
    console.log(`user.password: ${user.password}`)
    if (validPassword) {
        res.send('Welcome back!')
    } else {
        res.send('Wrong username or password');
    }
})


app.get('/secret', (req, res) => {
    res.send('Secret only for people who are logged.')
})

app.listen(3000, () => {
    console.log('Working on port: 3000');
})