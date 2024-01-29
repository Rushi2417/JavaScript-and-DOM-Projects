var n = Math.random() * 6;
n = Math.floor(n) + 1;

var randomDice1 = "dice" + n + ".png";

var randomDiceSourse1 = "images/"+randomDice1;

document.querySelectorAll("img")[0].setAttribute("src", randomDiceSourse1);




var m = Math.random() * 6;
m = Math.floor(m) + 1;

var randomDice2 = "dice" + m + ".png";

var randomDiceSourse2 = "images/"+randomDice2;

document.querySelectorAll("img")[1].setAttribute("src", randomDiceSourse2);

if(n>m){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}else if(n===m){
    document.querySelector("h1").innerHTML = "Tie";
}else{
    document.querySelector("h1").innerHTML = "Player 2 wins";
}