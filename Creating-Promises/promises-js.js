// new Promise((resolve, reject) => {
//     resolve();
// })


const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const randn = Math.random();
        setTimeout(() => {
            if (randn <= 0.7) {
                resolve('Sending data...');
            }
            reject('Request error')

        }, 1000)
    })
}

fakeRequest('google.com/dogs')
    .then((data) => {
        console.log("done")
        console.log(data);
    }).catch((err) => {
        console.log('error', err)
    })