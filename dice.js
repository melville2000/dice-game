var randomNumber1 = Math.random()*6;
var randomNumber2 = Math.random()*6;


randomNumber1 =  Math.floor(randomNumber1)+1;
randomNumber2 =  Math.floor(randomNumber2)+1;

document.querySelector(".dice1 img").setAttribute("src", "./images/dice"+randomNumber1+".png");
document.querySelector(".dice2 img").setAttribute("src", "./images/dice"+randomNumber2+".png");

if(randomNumber1 > randomNumber2){
    document.querySelector(".text").innerHTML ="🚩Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector(".text").innerHTML ="Player 2 Wins🚩";
}
else{
    document.querySelector(".text").innerHTML = "Draw" ;
}



var str =  document.querySelector(".text").innerHTML;
console.log( str)