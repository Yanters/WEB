const tweetForm = document.querySelector('#tweetForm');
const tweetContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let usernameInput = tweetForm.elements.username;
    let tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = ''; tweetInput.value = '';
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`)
    tweetContainer.append(newTweet);
}

tweetContainer.addEventListener('click', (e) => {
    e.target.nodeName === 'LI' && e.target.remove();
})
