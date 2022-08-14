



// API that generates Random Quote for typing test
const RANDOM_QUOTE = 'http://api.quotable.io/random'

// Storing HTML div class of 'typingTest' to a const
const displayQuoteElement = document.getElementById('typingTest');
const displayInputElement = document.getElementById('userType');



displayInputElement.addEventListener('input', () => {
    const test = displayQuoteElement.querySelectorAll('span');
    const value = displayInputElement.value.split('');

    test.forEach((charSpan, idx) => {
        const char = value[idx];
        if (char == null){
            charSpan.classList.remove('correct');
            charSpan.classList.remove('incorrect');
        } else if (char === charSpan.innerText){
            charSpan.classList.add('correct');
            charSpan.classList.remove('incorrect');
        } else {
            charSpan.classList.remove('correct');
            charSpan.classList.add('incorrect');
        }
    })

})



// function of fetchQuote will fetch quote from quotable API
function fetchQuote(){
    return fetch(RANDOM_QUOTE) // fetches quote from quoteable API
    .then(response => response.json()) //returns a promise and gets a response object and convert it to a json
    .then(data => data.content) // retreive data from the API, and return the 'content' key from the data hash (from quoteable API)
}

// store fetchQuote in an async function
async function displayNextQuote(){
    const quote = await fetchQuote();
    displayQuoteElement.innerHTML = '';   
    quote.split('').forEach((char) => {
        const charSpan = document.createElement('span');
        charSpan.innerText = (char);
        displayQuoteElement.appendChild(charSpan);
    })
    displayInputElement.value = null;

}


export {fetchQuote, displayNextQuote};