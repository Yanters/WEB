const joke = require('give-me-a-joke');
const color = require('colors');

joke.getRandomCNJoke(function (joke) {
    console.log(joke.rainbow);
});