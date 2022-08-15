const words = 'public business need long number word about after much need open change also in one good real one not school set they state against person system interest general point'.split(' ')
const wordsCount = words.length;
const wordsDiv = document.getElementById('words');
const game = document.getElementById('game');
const timer = 30 * 1000;
window.gameStart = null;


function addClass(ele, name) {
    ele.className += ' '+name;
}

function removeClass(ele, name) {
    ele.className = ele.className.replace(name, '');
}

function randWord() {
    const randIdx = Math.floor(Math.random() * wordsCount);
    return words[randIdx];
}

function formatWord(word) {
    return `<div class="word"><span class="letter">${word.split('').join('</span><span class="letter">')}</span></div>`;
}

function newTest() {
    wordsDiv.innerHTML = '';
    for (let i = 0; i < 200; i ++){
        wordsDiv.innerHTML += formatWord(randWord());
    }
    addClass(document.querySelector('.word'), 'current');
    addClass(document.querySelector('.letter'), 'current');
    window.timer = null;
}

game.addEventListener('keyup', event => {
    const key = event.key;
    const currentWord = document.querySelector('.word.current');
    const currentLetter = document.querySelector('.letter.current');
    const expected = currentLetter?.innerHTML || ' ';
    const isLetter = key.length === 1 && key !== ' ';
    const spacebar = key === ' ';
    const backspace = key === 'Backspace';
    const isFirstletter = currentLetter === currentWord.firstChild;

    if (!window.timer && isLetter) {
        window.timer = setInterval(() => {
            if (!window.gameStart) {
                window.gameStart = (new Date()).getTime();
            }
            const currentTime = (new Date()).getTime();
            const msPassed = currentTime - window.gameStart;
            const sPassed = Math.round(msPassed / 1000);
            const timeLeft = (timer / 1000) - sPassed;
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

    if (currentWord.getBoundingClientRect().top > 220) {
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

})


const resetTest = document.getElementById('reset');
const cursor = document.getElementById('cursor');


resetTest.addEventListener('click', () => {
    newTest();
    cursor.style.top = '175px';
    cursor.style.left = '273px';
    window.gamestart = null;
});
    


// resetTest.addEventListener('reset', )


export {newTest};




