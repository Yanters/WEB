const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
        id: 1,
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: 2,
        username: 'Skyler',
        comment: 'I like playing soccer'
    },
    {
        id: 3,
        username: 'Sk8ter',
        comment: 'Delete your account Todd'
    },
    {
        id: 4,
        username: 'onlyxd',
        comment: 'xD xD xDDDDDDD'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new', { comments });
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment });
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => {
        if (c.id === parseInt(id)) {
            return c;
        };
    })
    res.render('comments/show', { comment });
})

app.get('/tacos', (req, res) => {
    res.send('GET /tacos response')
})
app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`Type: ${meat}\nAmount: ${qty}`);
})

app.listen(3000, () => {
    console.log('Working on port: 3000');
})