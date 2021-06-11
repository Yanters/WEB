console.log("Hello World");
let random = Math.random();
if (random >= 0.9) {
    console.log(`Lucky you! Your number was: ${random}`);
} else {
    console.log(`Unlucky you! :C Your number was: ${random}`);
}

const password = prompt("Password (6+ char's no spacing): ")
if (password.length >= 6 && password.indexOf(' ') == -1) {
    console.log(`Good password: ${password}`)
} else {
    console.log(`Bad password: ${password}`)
}

