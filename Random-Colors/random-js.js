const button = document.querySelector('#button');
const rgb = document.querySelector('#rgb');

button.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 255 + 1);
    let g = Math.floor(Math.random() * 255 + 1);
    let b = Math.floor(Math.random() * 255 + 1);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    rgb.textContent = document.body.style.backgroundColor;
    if ((r < 50 && g < 50) || (r < 50 && b < 50) || (g < 50 && b < 50)) {
        rgb.style.color = 'white';
        console.log(`To dark!`)
    } else {
        rgb.style.color = 'black';
    }
})


