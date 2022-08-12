const randomQuote = 'http://api.quotable.io/random'
const displayQuoteElement = document.getElementById(typingTest)

function fetchQuote(){
    return fetch(randomQuote)
    .then(response => response.json())
    .then(data => data.content)
}

async function displayNextQuote(){
    const quote = await fetchQuote()
    displayQuoteElement.innerHTML = quote
}

displayNextQuote();
