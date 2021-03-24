var x, text;
//#region Guess My Number
let totalGuesses = 0;
function startFunction(){
    document.getElementById("submitBtn").disabled = true;
}
// This will need to go into a function
let randomNumber = Math.floor(Math.random() * 20)+1;
console.log(randomNumber);

function startFunction(){
    document.getElementById("submitBtn").disabled = false;
}
//#endregion
//#region Responses

function myFunction(){
    var x, text;
    x = document.getElementById("numb").value

    if(x<1 || x>20){
        text = "Please Pick a number from 1 to 20."
        document.getElementById("response").innerHTML = text;
    }else if(x==randomNumber){
        text = "Wow, good Guesser."
        document.getElementById("response").innerHTML = text;
    }else{
        text = "Nope try again."
        document.getElementById("response").innerHTML = text;
    }
    playerGuesses();
}
//#endregion
//#region Numbers Guessed
var numbsGuessed = [];
var playerScore = 0;

function playerGuesses(){
    var playerGuess;
    playerGuess = document.getElementById("numb").value;

    numbsGuessed.push(playerGuess);
    document.getElementById("yourGuess").innerHTML = numbsGuessed;

    if (playerGuess == randomNumber){
        var text = "Your Score is Going Up!!!"
        document.getElementById("scoreCount").innerHTML = text;
        playerScore = playerScore + 5;
    }else {
        playerScore = playerScore - 2;
        var text = "We're Goin Down!!!"
        document.getElementById("scoreCount").innerHTML = text;
    }
    document.getElementById("score").innerHTML = playerScore;
}
//#endregion
//#region Highscore
var highscore =  localStorage.getItem("highscore");
if(highscore !== null){
    if (playerScore > highscore) {
        localStorage.setItem("highscore", playerScore);
        document.getElementById("high").innerHTML = highscore;
    }
}else{
    localStorage.setItem("highcore", score);
    document.getElementById("high").innerHTML = highscore;
}
//#endregion