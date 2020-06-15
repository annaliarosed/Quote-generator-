const quotes = [
["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "- Albert Einstein"], 
["You only live once, but if you do it right, once is enough.", "- Mae West"], 
["No one can make you feel inferior without your consent.", "- Eleanor Roosevelt"], 
["I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", "- Maya Angelou"], 
["Even the smallest person can change the course of the future.", "- Galadriel"],
["The greatest glory in living lies not in never falling, but in rising every time we fall.", "- Nelson Mandela"],
["The way to get started is to quit talking and begin doing.", "- Walt Disney"] 
]

const colors = [
["#8BBF8C", "solid 5px #7DAB7E"], 
["#E7C073", "solid 5px #B8995C"],
["#CCE5E5", "solid 5px #A3B7B7"], 
["#E1AB96", "solid 5px #B48878"], 
["#FDE3AB", "solid 5px #FCD173"], 
["#FECBA5", "solid 5px #E4B694"]
];

const authorColor = ["#6F9870", "#B8995C", "#8EA0A0", "#9D7769", "#CAB588", "#CBA284"];

const randomQuote = () => {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let colorNumber = Math.floor(Math.random() * colors.length);
    document.getElementById("quote-box").innerHTML = '" ' + quotes[randomNumber][0] + ' "';
    document.getElementById("author-box").innerHTML = quotes[randomNumber][1];
    document.getElementById("quote-box").style.backgroundColor = colors[colorNumber][0];
    document.getElementById("quote-box").style.border = colors[colorNumber][1];
    document.getElementById("author-box").style.color = authorColor[colorNumber];
}

document.getElementById("button").addEventListener("click", randomQuote);

