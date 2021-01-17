// Variables:
var directions = document.querySelectorAll("h3");
var content = document.querySelectorAll("p");
// var options = document.querySelectorAll("ul");
var button = document.querySelectorAll("button");

// Timer:

var timeLimit = document.getElementById("time");

var secondsLeft = 75;

function startTimer() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        timeLimit.textContent = secondsLeft + " seconds remaining.";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("I am sorry, but you have run out of time. Better luck next time!");
            clearCard();
        }
    }, 1000);

document.getElementById("quiz-question").innerHTML = "What is HTML?";
document.getElementById("intro-content").innerHTML = " ";

};
