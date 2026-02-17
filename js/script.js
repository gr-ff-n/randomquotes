// Random Quote generator function

function generateQuote() {
    const quotes = [
        {
            quote: "An unexamined life is not worth living.",
            author: "Socrates"
        },

        {
            quote: "Believe you can and you&apos;re halfway there.",
            author: "Theodore Roosevelt"
        },

        {
            quote: "If there is no struggle, there is no progress.",
            author: "Frederick Douglass"
        },

        {
            quote: "Stay afraid, but do it anyway. What&apos;s important is the action.",
            author: "Carrie Fisher"
        },

        {
            quote: "Do the best you can until you know better. Then when you know better, do better.",
            author: "Maya Angelou"
        },

        {
            quote: "Life is 10% what happens to you and 90% how you react to it.",
            author: "Charles R. Swindoll"
        }
    ];

let arrayIndex = Math.floor(Math.random() * quotes.length);

document.getElementById("quotation").innerHTML = "&quot;" + quotes[arrayIndex].quote + "&quot;";

document.getElementById("author").innerHTML = "&mdash; " + quotes[arrayIndex].author;
}

window.onload = function () {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}

const d = new Date();
document.getElementById('copyrightyear').innerHTML = d.getFullYear();