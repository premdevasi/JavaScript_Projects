const quotes = document.querySelector('#quotes');
const author = document.querySelector('#author');
const btn = document.querySelector('#new-quote');

console.log(quotes, author, btn);

async function getQutes(){
    const quote = await fetch("https://api.quotable.io/quotes/random");
    const data = await quote.json();
    console.log(data);
    console.log(data[0].author);
    console.log(data[0].content);
    quotes.textContent = data[0].content;
    author.textContent = `- ${data[0].author}`
}


btn.addEventListener("click", getQutes);