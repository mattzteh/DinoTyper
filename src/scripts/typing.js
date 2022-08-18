import {wordsDiv, game, resetTest, cursor, clock, human, dino} from './constants.js';
import {addClass, removeClass, formatWord, randWord, displayWpm} from './util.js';

// variables--------------------------------------------------------------------

const timer = 120 * 1000;
let gameStart = false;
let runInterval;
let dino_left = 270;
let left = 350;

window.timer = null;
window.gameStart = null;

//------------------------------------------------------------------------------

export function newTest() {

    gameStart = false;

    clock.innerText = 120;
    cursor.style.top = '327px';
    cursor.style.left = '274px';
    wordsDiv.style.marginTop = '0px';
    dino.style.left = '270px';
    human.style.left = '350px';
    dino_left = 270;
    left = 350;
    window.gameStart = null;
    window.timer = null;

    stopDino();

    if (document.querySelector('#game.over')){
        removeClass(game, 'over');
    }
    removeClass(game, 'over');

    while (wordsDiv.lastChild) {
        wordsDiv.removeChild(wordsDiv.lastChild);
    }

    for (let i = 0; i < 200; i++){
        wordsDiv.innerHTML += formatWord(randWord());
    }
    
    addClass(document.querySelector('.word'), 'current');
    addClass(document.querySelector('.letter'), 'current'); 
}

//------------------------------------------------------------------------------

function gameOver() {
    clearInterval(window.timer);
    addClass(game, 'over');
    document.getElementById('info').innerHTML = `WPM: ${displayWpm()}`;
}

if (gameStart === false) {
    game.addEventListener('keyup', () => {
        if(!runInterval)runTimer();
    })
}


function runTimer() {
    runningDino();
    runInterval = setInterval(runningDino, 1000);
}

function runningDino() {
    if (!document.querySelector('#game.over')){
        dino.style.left = dino_left + 'px'; 
        dino_left += 8;
    }
}

function stopDino(){
    clearInterval(runInterval);
    console.log(runInterval)
}


game.addEventListener('keyup', event => {

    gameStart = true;
    const key = event.key;
    const currentWord = document.querySelector('.word.current');
    const currentLetter = document.querySelector('.letter.current');
    const expected = currentLetter?.innerHTML || ' ';
    const isLetter = key.length === 1 && key !== ' ';
    const spacebar = key === ' ';
    const backspace = key === 'Backspace';
    const isFirstletter = currentLetter === currentWord.firstChild;

    if (document.querySelector('#game.over')) {
        return;
    }

    if (!window.timer && isLetter) {
        window.timer = setInterval(() => {
            if (!window.gameStart) {
                window.gameStart = (new Date()).getTime();
            }
            const currentTime = (new Date()).getTime();
            const msPassed = currentTime - window.gameStart;
            const sPassed = Math.round(msPassed / 1000);
            const timeLeft = (timer / 1000) - sPassed;
            if (timeLeft <= 0) {
                gameOver();
                return;
            }
            document.getElementById('info').innerHTML = timeLeft + '';
        },1000)
    }

    if (isLetter) {
        if (currentLetter) {
            addClass(currentLetter, key === expected? 'correct' : 'incorrect');
            removeClass(currentLetter, 'current');
            if (currentLetter.nextSibling) {
                addClass(currentLetter.nextSibling, 'current');
            }
        }
    }

    if (spacebar) {
        if (expected !== ' ') {
            const invalidatedLetters = [...document.querySelectorAll('.word.current .letter:not(.correct)')];
            invalidatedLetters.forEach((letter) => {
                addClass(letter, 'incorrect');
            })
        }
        removeClass(currentWord, 'current');
        addClass(currentWord.nextSibling, 'current');
        if (currentLetter) {
            removeClass(currentLetter, 'current');
        }
        addClass(currentWord.nextSibling.firstChild, 'current');
    }

    if (backspace) {
        if (currentLetter && isFirstletter) {
            removeClass(currentWord, 'current');
            addClass(currentWord.previousSibling, 'current');
            removeClass(currentLetter, 'current');
            addClass(currentWord.previousSibling.lastChild, 'current');
            removeClass(currentWord.previousSibling.lastChild, 'incorrect');
            removeClass(currentWord.previousSibling.lastChild, 'correct');
        }
        if (currentLetter && !isFirstletter) {
            removeClass(currentLetter, 'current');
            addClass(currentLetter.previousSibling, 'current');
            removeClass(currentLetter.previousSibling, 'incorrect');
            removeClass(currentLetter.previousSibling, 'correct');
        }
        if (!currentLetter) {
            addClass(currentWord.lastChild, 'current');
            removeClass(currentWord.lastChild, 'incorrect');
            removeClass(currentWord.lastChild, 'correct');  
        }
    }

    if (currentWord.getBoundingClientRect().top > 360) {
        const margin = parseInt(wordsDiv.style.marginTop || '0px');
        wordsDiv.style.marginTop = (margin - 35) + 'px';
    }

    const nextLetter = document.querySelector('.letter.current')
    const nextWord = document.querySelector('.word.current');
    const cursor = document.getElementById('cursor');

    if (nextLetter) {
        cursor.style.top = nextLetter.getBoundingClientRect().top + 'px';
        cursor.style.left = nextLetter.getBoundingClientRect().left + 'px';
    } else {
        cursor.style.left = nextWord.getBoundingClientRect().right + 'px';
    }
    if (isLetter) {
        human.style.left = left + 'px';
        left += 2;
    }
})

resetTest.addEventListener('click', () => {
    clearInterval(runInterval);
    runInterval = undefined;
    gameOver();
    newTest();    
});
