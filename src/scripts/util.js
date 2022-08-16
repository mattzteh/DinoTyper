import {words, wordsCount} from './constants.js';

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

