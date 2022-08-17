import {dino} from './constants'

let left = 270;
export function runningDino(){
    if (!document.querySelector('#game.over')){
        setInterval(() => {
            dino.style.left = left + 'px'; 
            left += 8;
        },700)
    }
}

