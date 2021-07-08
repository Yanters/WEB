const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('All Shelters');
})

router.post('/', (req, res) => {
    res.send('Create Shelter');
})

router.get('/:id', (req, res) => {
    res.send('Specyfic Shelter');
})

router.get('/:id/edit', (req, res) => {
    res.send('Editing Specyfic Shelter');
})

module.exports = router;