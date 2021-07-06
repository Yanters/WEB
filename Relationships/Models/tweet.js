const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database!');
    }).catch(err => {
        console.log('Database Error!');
        console.log(err);
    })

const userSchema = new Schema({
    username: String,
    age: Number
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

const makeTweets = async () => {
    // const user = new User({ username: 'chickenfan99', age: 43 })
    const user = await User.findOne({ username: 'chickenfan99' })
    const tweet2 = new Tweet({ text: 'I am a really big fun of silkie chickens!', likes: 100 })
    tweet2.user = user;
    // await user.save();
    await tweet2.save();
}

// makeTweets();

const findTweet = async () => {
    const t = await Tweet.find({}).populate('user', 'username');
    console.log(t);
}
findTweet();