const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
}

const reset = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
const gameType = document.querySelector('#gametype');
const body = document.querySelector('body');

let winningscore = parseInt(winningScoreSelect.value);
let isGameover = false;

winningScoreSelect.addEventListener('change', function () {
    // winningscore = parseInt(this.value);
    ResetGame();
})

function updateScore(player, opponent) {
    if (!isGameover) {
        player.score++;
        if (player.score === winningscore) {
            if (gameType.value === 'points') {
                isGameover = true;
                player.display.classList.add('winner');
                opponent.display.classList.add('loser');
                player.button.disabled = true;
                opponent.button.disabled = true;
            } else if (gameType.value === 'dominance') {
                if ((player.score - opponent.score) >= 2) {
                    isGameover = true;
                    player.display.classList.add('winner');
                    opponent.display.classList.add('loser');
                    player.button.disabled = true;
                    opponent.button.disabled = true;
                } else {
                    winningscore++;
                }
            }
        }
        checkingScore();
        player.display.textContent = player.score;
    }
    console.log(`Player 1: ${p1.score} \nPlayer 2: ${p2.score}`)
}

gameType.addEventListener('change', ResetGame);

p1Button.addEventListener('click', function () { updateScore(p1, p2) });

p2Button.addEventListener('click', function () { updateScore(p2, p1) });

reset.addEventListener('click', ResetGame)

function ResetGame() {
    console.log('Reseted');

    for (let p of [p1, p2]) {
        p.button.disabled = false;
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove('winner', 'loser', 'winning', 'losing', 'draw');
    }

    isGameover = false;
    winningscore = parseInt(winningScoreSelect.value);
}

body.addEventListener('keydown', (e) => {
    console.log(`${e.key} has been pressed`);
    switch (e.key) {
        case 'r':
        case 'ArrowDown':
            ResetGame();
            break;
        case '2':
        case 'ArrowRight':
        case 'd':
            updateScore(p2, p1)
            break;
        case '1':
        case 'ArrowLeft':
        case 'a':
            updateScore(p1, p2)
            break;

    }
})

function checkingScore() {
    p1.display.classList.remove('winning', 'losing', 'draw');
    p2.display.classList.remove('winning', 'losing', 'draw');
    if (p1.score !== winningscore && p2.score !== winningscore) {
        if (p1.score > p2.score) {

            p1.display.classList.add('winning');
            p2.display.classList.add('losing');

        } else if (p1.score < p2.score) {
            p2.display.classList.add('winning');
            p1.display.classList.add('losing');
        } else {
            p1.display.classList.add('draw');
            p2.display.classList.add('draw');
        }
    }

}