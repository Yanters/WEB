const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        return next();
    }
    res.send('You are not an admin')
})

router.get('/secret', (req, res) => {
    res.send(`Admin's secret`)
})

router.get('/deletewebsite', (req, res) => {
    res.send(`Deleted!`)
})

module.exports = router;