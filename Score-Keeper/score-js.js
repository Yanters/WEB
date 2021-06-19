const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const reset = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
const gameType = document.querySelector('#gametype');

let p1Score = 0;
let p2Score = 0;
let winningscore = parseInt(winningScoreSelect.value);
let isGameover = false;

winningScoreSelect.addEventListener('change', function () {
    winningscore = parseInt(this.value);
    ResetGame();
})
gameType.addEventListener('change', ResetGame)

p1Button.addEventListener('click', () => {
    if (!isGameover) {
        p1Score++;
        if (p1Score === winningscore) {
            if (gameType.value === 'points') {
                isGameover = true;
                p1Display.classList.add('winner');
                p2Display.classList.add('loser');
                p1Button.disabled = true;
                p2Button.disabled = true;
            } else if (gameType.value === 'dominance') {
                if ((p1Score - p2Score) >= 2) {
                    isGameover = true;
                    p1Display.classList.add('winner');
                    p2Display.classList.add('loser');
                    p1Button.disabled = true;
                    p2Button.disabled = true;
                } else {
                    winningscore++;
                }
            }
        }
        checkingScore();
        p1Display.textContent = p1Score;
    }



})
p2Button.addEventListener('click', () => {
    if (!isGameover) {
        p2Score++;
        if (p2Score === winningscore) {
            if (gameType.value === 'points') {
                isGameover = true;
                p2Display.classList.add('winner');
                p1Display.classList.add('loser');
                p1Button.disabled = true;
                p2Button.disabled = true;
            } else if (gameType.value === 'dominance') {
                if ((p2Score - p1Score) >= 2) {
                    isGameover = true;
                    p2Display.classList.add('winner');
                    p1Display.classList.add('loser');
                    p1Button.disabled = true;
                    p2Button.disabled = true;
                } else {
                    winningscore++;
                }
            }
        }
        checkingScore();
        p2Display.textContent = p2Score;
    }
})

reset.addEventListener('click', ResetGame)

function ResetGame() {
    p1Button.disabled = false;
    p2Button.disabled = false;
    p1Score = 0;
    p1Display.textContent = p1Score;
    p2Score = 0;
    p2Display.textContent = p2Score;
    isGameover = false;
    p1Display.classList.remove('winner', 'loser', 'winning', 'losing', 'draw');
    p2Display.classList.remove('winner', 'loser', 'winning', 'losing', 'draw');
    winningscore = parseInt(winningScoreSelect.value);
}

function checkingScore() {
    p1Display.classList.remove('winning', 'losing', 'draw');
    p2Display.classList.remove('winning', 'losing', 'draw');
    if (p1Score !== winningscore && p2Score !== winningscore) {
        if (p1Score > p2Score) {

            p1Display.classList.add('winning');
            p2Display.classList.add('losing');

        } else if (p1Score < p2Score) {
            p2Display.classList.add('winning');
            p1Display.classList.add('losing');
        } else {
            p1Display.classList.add('draw');
            p2Display.classList.add('draw');
        }
    }

}