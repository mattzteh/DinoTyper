import {words, wordsCount} from './constants.js';
import {timer} from './typing.js'

export function addClass(ele, name) {
    ele.className += ' '+name;
}

export function removeClass(ele, name) {
    ele.className = ele.className.replace(name, '');
}

export function randWord() {
    const randIdx = Math.floor(Math.random() * wordsCount);
    return words[randIdx];
}

export function formatWord(word) {
    return `<div class="word"><span class="letter">${word.split('').join('</span><span class="letter">')}</span></div>`;
}

export function displayWpm() {
    const words = [...document.querySelectorAll('.word')];
    const lastWord = document.querySelector('.word.current');
    const wordsTyped = words.slice(0, words.indexOf(lastWord));
    const correctWords = wordsTyped.filter((word) => {
        const letters = [...word.children];
        const incorrect = letters.filter(letter => letter.className.includes('incorrect'));
        const correct = letters.filter(letter => letter.className.includes('correct'));
        return incorrect.length === 0 && correct.length === letters.length;
    })
    return (correctWords.length / timer) * 60000;
}


