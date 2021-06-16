const allLinks = document.querySelectorAll(`a`);

for (let link of allLinks) {
    link.style.color = 'magenta';
    link.style.textDecorationColor = 'cyan';
    link.style.textDecorationStyle = 'wavy';
}

const h1 = document.querySelector(`h1`);
console.log(window.getComputedStyle(h1).color);

const h2 = document.querySelector('h2');
// let currentClasses = h2.getAttribute('class')
// h2.setAttribute('class', `${currentClasses} purple`)

//Better way of doing that ^^^
h2.classList.add(`purple`);
h2.classList.add(`border`);
// h2.classList.remove(`border`);
h2.classList.toggle(`border`);
