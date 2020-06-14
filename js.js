const quotes = [
"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein", 
"You only live once, but if you do it right, once is enough.", 
"No one can make you feel inferior without your consent.", 
"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", 
"Even the smallest person can change the course of the future.",
"The greatest glory in living lies not in never falling, but in rising every time we fall." 
]

const authors = ["- Albert Einstein", "- Mae West", "- Eleanor Roosevelt", "- Maya Angelou", "- Galadriel"]

const colors = [["#8BBF8C", "solid 5px #7DAB7E"], ["#E7C073", "solid 5px #B8995C"], ["#CCE5E5", "solid 5px #A3B7B7"], ["#E1AB96", "solid 5px #B48878"], ["#FDE3AB", "solid 5px #FCD173"], ["#FECBA5", "solid 5px #E4B694"]];

const authorColor = ["#6F9870", "#B8995C", "#8EA0A0", "#9D7769", "#CAB588", "#CBA284"];

const randomQuote = () => {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote-box").innerHTML = '" ' + quotes[randomNumber] + ' "';
    document.getElementById("author-box").innerHTML = authors[randomNumber];
    document.getElementById("quote-box").style.backgroundColor = colors[randomNumber][0];
    document.getElementById("quote-box").style.border = colors[randomNumber][1];
    document.getElementById("author-box").style.color = authorColor[randomNumber];
}

document.getElementById("button").addEventListener("click", randomQuote);


