const words = 'public long number word about after much need open change also in one good real one not school set they state against'.split(' ')
const wordsCount = words.length;
const wordsDiv = document.getElementById('words');
const game = document.getElementById('game');


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
    for (let i = 0; i < 50; i ++){
        wordsDiv.innerHTML += formatWord(randWord());
    }
    addClass(document.querySelector('.word'), 'current');
    addClass(document.querySelector('.letter'), 'current');
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

    const nextLetter = document.querySelector('.letter.current')
    const nextWord = document.querySelector('.word.current');
    const cursor = document.getElementById('cursor');
    if (nextLetter) {
        cursor.style.top = nextLetter.getBoundingClientRect().top + 'px';
        cursor.style.left = nextLetter.getBoundingClientRect().left + 'px';
    } else {
        cursor.style.top = nextWord.getBoundingClientRect().top + 'px';
        cursor.style.left    = nextWord.getBoundingClientRect().right + 'px';
    }

})


export {newTest};




