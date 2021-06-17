const btn = document.querySelector(`#v2`);

btn.onclick = function () {
    console.log(`You clicked me!`);
}

function scream() {
    console.log(`AAAAAAA`);
}

btn.onmouseenter = scream;

document.querySelector(`h1`).onclick = () => alert(`You clicked the wrong thing`);

btn3 = document.querySelector(`#v3`);

btn3.addEventListener('dblclick', () => console.log(`nice!`));

