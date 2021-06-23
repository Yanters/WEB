axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log(res.data.ticker.price);
    })
    .catch(err => {
        console.log('Error: ', err)
    })

const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
        console.log(res.data.ticker.price)
    } catch (err) {
        console.log('Error: ', err);
    }
}

const getDadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    console.log(res.data.joke);
    const newLI = document.createElement('LI');
    newLI.append(res.data.joke);
    jokes.append(newLI);
}

const jokes = document.querySelector('#jokes');
const jokeButton = document.querySelector('#button');

jokeButton.addEventListener('click', getDadJoke);