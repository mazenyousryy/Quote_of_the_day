var quote = document.getElementById("quote");
var author = document.getElementById("author");

var quoteBtn = document.getElementById("quote-btn");

var quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein",
    },
    {
        quote: "So many books, so little time.",
        author: "Frank Zappa",
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero",
    },
    {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "Dr. Seuss",
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost",
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain",
    },
    {
        quote: "A friend is someone who knows all about you and still loves you.",
        author: "Elbert Hubbard",
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all",
        author: "Oscar Wilde",
    },
];

var newIndex;
var index;
var displayedQuotes = [];

function displayQuote() {
    if (displayedQuotes.length == quotes.length) {
        displayedQuotes = [];
    }

    do {
        newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex == index || displayedQuotes.includes(newIndex));

    displayedQuotes.push(newIndex);
    index = newIndex;
    console.log(newIndex);

    quote.innerHTML = quotes[index].quote;
    author.innerHTML = quotes[index].author;
}
