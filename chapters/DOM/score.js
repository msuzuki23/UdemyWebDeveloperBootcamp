var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var numberofPlays = document.querySelector("p span");
var plays = document.querySelector("input");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var gameOver = false;
var winningScore = 5;

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}

var p1Score = 0;
p1Button.addEventListener("click", function() {
    if(!gameOver){
        p1Score++;
        console.log(p1Score, winningScore);
        if(p1Score === winningScore){
            gameOver = true;
            p1Display.classList.add("winner");
        }
        p1Display.textContent = p1Score;
    }
});

var p2Score = 0;
p2Button.addEventListener("click", function() {
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            gameOver = true;
            p2Display.classList.add("winner");
        }
    }
    p2Display.textContent = p2Score;
});

resetButton.addEventListener("click", function(){
    reset();
});

plays.addEventListener("change", function(){
    numberofPlays.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});








