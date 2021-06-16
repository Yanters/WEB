const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.innerText = `I am a link ;>`
}

const h1 = document.querySelector('h1');
h1.innerHTML = `<i>${h1.innerText}</i>`