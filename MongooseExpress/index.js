const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to DB.');
    })
    .catch(err => {
        console.log('Error: ', err);
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/products', async (req, res) => {
    const products = await Product.find({});
    // console.log(products);
    res.render('products/index', { products });
})

app.get('/products/new', (req, res) => {
    res.render('products/new');
})

app.post('/products', async (req, res) => {
    // console.log(req.body);
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    // console.log(product);
    res.render('products/show', { product });
})

app.listen(3000, () => {
    console.log('Working on port: 3000')
})