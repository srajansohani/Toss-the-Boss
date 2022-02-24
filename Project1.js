var n1 = Math.floor(Math.random()*6) + 1;
var x1 = ["https://raw.githubusercontent.com/Sarriaga0415/Dice/8d11fd21efc958c43a79cf886a75c362d243b1f1/images/dice1.png","https://raw.githubusercontent.com/Sarriaga0415/Dice/8d11fd21efc958c43a79cf886a75c362d243b1f1/images/dice2.png","https://raw.githubusercontent.com/Sarriaga0415/Dice/8d11fd21efc958c43a79cf886a75c362d243b1f1/images/dice3.png","https://raw.githubusercontent.com/Sarriaga0415/Dice/8d11fd21efc958c43a79cf886a75c362d243b1f1/images/dice4.png","https://raw.githubusercontent.com/Sarriaga0415/Dice/8d11fd21efc958c43a79cf886a75c362d243b1f1/images/dice5.png","https://raw.githubusercontent.com/Sarriaga0415/Dice/8d11fd21efc958c43a79cf886a75c362d243b1f1/images/dice6.png"]
var image = document.getElementById("d1");
image.src = x1[n1- 1];

var n2 = Math.floor(Math.random()*6) + 1;
var x2 = ["https://raw.githubusercontent.com/Sarriaga0415/Dice/8d11fd21efc958c43a79cf886a75c362d243b1f1/images/dice1.png","https://raw.githubusercontent.com/Sarriaga0415/Dice/8d11fd21efc958c43a79cf886a75c362d243b1f1/images/dice2.png","https://raw.githubusercontent.com/Sarriaga0415/Dice/8d11fd21efc958c43a79cf886a75c362d243b1f1/images/dice3.png","https://raw.githubusercontent.com/Sarriaga0415/Dice/8d11fd21efc958c43a79cf886a75c362d243b1f1/images/dice4.png","https://raw.githubusercontent.com/Sarriaga0415/Dice/8d11fd21efc958c43a79cf886a75c362d243b1f1/images/dice5.png","https://raw.githubusercontent.com/Sarriaga0415/Dice/8d11fd21efc958c43a79cf886a75c362d243b1f1/images/dice6.png"]
var image = document.getElementById("d2");
image.src = x2[n2 - 1];

if(n1 > n2){
    document.querySelector("h1").innerHTML = "Player 1 is Boss";
}
else if(n1 == n2){
    document.querySelector("h1").innerHTML = "It's a Draw";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 is Boss";
}