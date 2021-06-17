document.querySelector('button').addEventListener('click', evt => { console.log(evt) });

const input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
    console.log(`${e.code} has been pressed`);
})
// input.addEventListener('keyup', () => {
//     console.log('Key Up');
// })

window.addEventListener('keydown', (e) => {
    console.log(`${e.code} has been pressed`);
})