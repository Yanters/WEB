const franc = require('franc');
const langs = require('langs');
const colors = require('colors');
const input = process.argv[2];

const lcode = franc(input);

const language = langs.where(3, lcode);
try {
    console.log(`This is: ${language.name.red}`.yellow);
} catch (e) {
    console.log(`I have no idea`.red)
}

// if(lcode === 'und'){
//     console.log('I have no idea'.red)
// }

