const express = require('express');
const path = require('path');
const redditData = require('./data.json');
const app = express();
// console.log(redditData);

app.use(express.static(path.join(__dirname, '/public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 100) + 1;
    res.render('random', { rand: num })
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data, subreddit });
    } else {
        res.render('notfound', { subreddit });

    }
})

app.get('/cats', (req, res) => {
    const cats = ['Blue', 'Krakers', 'Monty', 'Steph', 'Algry', 'Mel'];
    res.render('cats', { allCats: cats })
})

app.get('*', (req, res) => {
    res.send('Unkown URL');
})

app.listen(3000, () => {
    console.log('Working on port: 3000')
})