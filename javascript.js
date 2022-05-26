
const QUOTEBANK = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "- Oscar Wilde"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "- Albert Einstein"
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "- Marcus Tullius Cicero"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "- Mae West"
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "- Mahatma Gandhi"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "- Robert Frost"
    }
]

const COLORS = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
]


window.onload = init;

function init() {
    generateQuote();
}

function generateQuote() {
    let textColor = document.querySelector('#text');
    let authorTextColor = document.querySelector('#author');
    let btnColor = document.querySelectorAll('.btn');
    let bodyColor = document.querySelector('body');
    setTimeout(() => {

        let randomColorData = generateRandomIndex(COLORS);
        textColor.style.color = randomColorData;
        authorTextColor.style.color = randomColorData;
        bodyColor.style.backgroundColor = randomColorData;
        // btnColor[0].style.backgroundColor = randomColorData;
        // btnColor[1].style.backgroundColor = randomColorData;
        // btnColor[2].style.backgroundColor = randomColorData;
        btnColor.forEach(div => {
            div.style.backgroundColor = randomColorData;
        });


        let randomQuoteData = generateRandomIndex(QUOTEBANK);

        let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;text="

        let quoteInAPIFormat = "%22" + randomQuoteData.quote.replace(/ /g, "%20");

        let authorInAPIFormat = "%22" + randomQuoteData.author.replace(/ /g, "%20");
        
        twitterLink += quoteInAPIFormat;
        
        twitterLink += authorInAPIFormat;
        
        document.getElementById("tweet-quote").href = twitterLink;

        let tumblrLink = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;';



        let quoteInTumblr = randomQuoteData.quote.replace(/ /g, "%20");

        let authorInTumblr = randomQuoteData.author.replace(/ /g, "%20");

        let caption = "caption=" + authorInTumblr.replace(/-/,"") +"&amp;"

        tumblrLink += caption;


        let content = "content=" + quoteInTumblr + "&amp;";

        tumblrLink += content;

        tumblrLink += "canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button"

        document.getElementById("tumblr-quote").href = tumblrLink;
        
        document.getElementById("text").innerHTML = "<p><i class='fa-solid fa-quote-left'></i> " + randomQuoteData.quote + "</p>";
        document.getElementById("author").innerText = randomQuoteData.author;

        textColor.classList.add('hein');
        authorTextColor.classList.add('hein');
        bodyColor.classList.add('htet');

    }, 500);
    
    textColor.classList.remove('hein');
    authorTextColor.classList.remove('hein');
    bodyColor.classList.remove('htet');
}

function generateRandomIndex(bank) {
    let BankLength = bank.length;
    let randomIndex = Math.floor(Math.random() * BankLength);
    let randomData = bank[randomIndex];
    return randomData;
}









    


