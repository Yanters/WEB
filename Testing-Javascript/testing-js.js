// console.log("Hello World");
// let random = Math.random();
// if (random >= 0.9) {
//     console.log(`Lucky you! Your number was: ${random}`);
// } else {
//     console.log(`Unlucky you! :C Your number was: ${random}`);
// }

// const password = prompt("Password (6+ char's no spacing): ")
// if (password.length >= 6 && password.indexOf(' ') == -1) {
//     console.log(`Good password: ${password}`)
// } else {
//     console.log(`Bad password: ${password}`)
// }














// let numberOfTries = 0;
// let lastguess = '';
// let guess = '';
// let hint = '';
// let guessednumbers = "";
// let lose = true;
// let winningnumber = Math.floor(Math.random() * 1000);
// console.log(winningnumber);
// while (lose) {
//     if (guess != null && guess != '') {
//         if (guess > winningnumber) {
//             hint = 'Lower';
//         } else {
//             hint = 'Higher';
//         }
//     }
//     guess = prompt(`Guess your number:\nHint: ${hint} \nUsed numbers: ` + guessednumbers);
//     numberOfTries++;
//     if (guess != null && guess != '') {
//         if (!guessednumbers.includes(' ' + guess + ' ') && lastguess != guess) {
//             guessednumbers += " " + guess;
//         }
//         if (guess == winningnumber) {
//             lose = false;
//             console.log(`You won! \nTry number: ${numberOfTries}`)
//             alert(`You won! \nTry number: ${numberOfTries}`);
//             break;

//         }
//     }

//     lastguess = guess;
// }














let input = prompt('what would you like to do?');
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('*****************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*****************')
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index')
        }
    }
    input = prompt('what would you like to do?')
}
console.log('OK QUIT THE APP!')