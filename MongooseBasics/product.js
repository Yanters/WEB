const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to DB.');
    })
    .catch(err => {
        console.log('Error: ', err);
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be greater than 0']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: {
        type: [String],
        default: ['Cycling']
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        },
        size: {
            type: String,
            enum: ['S', 'N', 'L']
        }
    }
});

productSchema.methods.greet = function () {
    console.log('Hi there!')
    console.log(`- ${this.name}`)
}

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function (newCategory) {
    this.categories.push(newCategory);
    return this.save();
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { price: 0, onSale: true });
}

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Bike Helmet' });
    // foundProduct.greet();
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
    await foundProduct.addCategory('Outdoors');
    console.log(foundProduct);
}
findProduct();

Product.fireSale().then(res => console.log(res));

// const bike = new Product({ name: 'Cycling Jersy', price: 29.99, categories: ['Cycling'], size: 'M' })
// bike.save()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })

// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -199.99 }, { new: true, runValidators: true })
//     .then(data => console.log(data))
//     .catch(err => console.log(err));