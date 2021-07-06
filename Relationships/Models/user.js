
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database!');
    }).catch(err => {
        console.log('Database Error!');
        console.log(err);
    })

const userSchema = mongoose.Schema({
    first: String,
    last: String,
    adresses: [
        {
            _id: { id: false },
            street: String,
            city: String,
            state: String,
            country: String,

        }
    ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })
    u.adresses.push({
        street: '123 Sesame St.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    })
    const res = await u.save();
    console.log(res);
}

const addAdress = async (id) => {
    const user = await User.findById(id);
    user.adresses.push(
        {
            street: '99 3rd St.',
            city: 'New York',
            state: 'NY',
            country: 'USA'
        }
    )
    const res = await user.save();
    console.log(res);
}

// makeUser();
addAdress('60e4c1a0b6525f19b81906d2');
// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));