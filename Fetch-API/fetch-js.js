fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log("Response, waiting to parse: ", res);
        return res.json();
    })
    .then(data => {
        console.log('Data parsed: ', data);
        console.log('Bitcoin price: ', data.ticker.price);
    })
    .catch(e => {
        console.log('Error: ', e)
    })