const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const methodOverride = require('method-override');

const AppError = require('./AppError');

const Product = require('./models/product');
const { stat } = require('fs');

mongoose.connect('mongodb://localhost:27017/farmStand2', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to DB.');
    })
    .catch(err => {
        console.log('Error: ', err);
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category: category });
        res.render('products/index', { products, category });

    } else {
        const products = await Product.find({});
        // console.log(products);
        res.render('products/index', { products, category: 'All' });
    }

})

app.get('/products/new', (req, res) => {
    // throw new AppError('Testing', 500);
    res.render('products/new', { categories });
})

app.post('/products', async (req, res, next) => {
    try {
        // console.log(req.body);
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.redirect(`/products/${newProduct._id}`)
    }
    catch (e) {
        next(e)
    }
})

function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e));
    }
}

app.get('/products/:id', wrapAsync(async (req, res, next) => {

    const { id } = req.params;
    const product = await Product.findById(id);
    // console.log(product);
    if (!product) {
        throw new AppError('Product not found', 500);
    }
    res.render('products/show', { product });

}))
app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})
app.get('/products/:id/edit', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.render('products/edit', { product, categories })
    } catch (e) {
        next(e)
    }
})

app.put('/products/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
        console.log(req.body);
        res.redirect(`/products/${product._id}`)
    }
    catch (e) {
        next(e)
    }
})


app.use((err, req, res, next) => {
    const { status = 500, message = 'Error' } = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log('Working on port: 3000')
})