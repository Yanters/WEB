const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database!');
    }).catch(err => {
        console.log('Database Error!');
        console.log(err);
    })

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
})

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//     { name: 'Goddes Melon', price: 4.99, season: 'Summer' },
//     { name: 'Sugar Melon', price: 8.99, season: 'Summer' },
//     { name: 'Baby Melon', price: 2.99, season: 'Summer' }
// ])

const makeFarm = async () => {
    const farm = new Farm({ name: 'Full Belly Farms', city: 'Guinda, CA' })
    const melon = await Product.findOne({ name: 'Goddes Melon' });
    farm.products.push(melon);
    await farm.save();
    console.log(farm);
}

// makeFarm();

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Full Belly Farms' });
    const watermelon = await Product.findOne({ name: 'Baby Melon' })
    farm.products.push(watermelon);
    await farm.save();
    console.log(farm);
}

// addProduct();

Farm.findOne({ name: 'Full Belly Farms' })
    .populate('products')
    .then(farm => console.log(farm));