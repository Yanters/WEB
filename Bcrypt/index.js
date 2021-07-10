const bcrypt = require('bcrypt');

// const hashPassword = async pw => {
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(pw, salt)
//     console.log(salt);
//     console.log(hash);
// }

const hashPassword = async pw => {
    const hash = await bcrypt.hash(pw, 12)
    console.log(hash);
}

const login = async (pw, hashPw) => {
    const result = await bcrypt.compare(pw, hashPw)
    if (result) {
        console.log(`Logged in with password: ${pw}`);
    } else {
        console.log(`Wrong password: ${pw}`);

    }
}

hashPassword('password');
login('password', '$2b$12$ziCBHhPlZT0XZKq12abn0e7O0QJOliUrKM33HxoQZgSrYeXdVml2S')