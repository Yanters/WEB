const input = document.querySelector('input');
const h2 = document.querySelector('h2');


// input.addEventListener('change', (e) => {
//     console.log('Input Event')
// })
input.addEventListener('input', (e) => {
    console.log('Input Event')
    h2.innerText = input.value;
})