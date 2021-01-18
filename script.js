var introCard = document.querySelector(".intro-card");
var questionCard = document.querySelector(".question-card");
var conclusionCard = document.querySelector(".conclusion-card");

var quizQuestion = document.querySelector("#quiz-question");

var question1 = "What do web developers use to structure a web page?";
var question2 = "What do web developers use to set the style of a web page?";
var question3 = "What do web developers use to set the functionality of a web page?";
var question4 = "What do web developers use to manipulate a web page using the DOM structure?";
var question5 = "What can web developers use to their use of JavaScript?";

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
        }
    }, 1000);

introCard.setAttribute("style", "display: none");
questionCard.setAttribute("style", "display: block");

};

function toQuestion2() {
    quizQuestion = question2;
}

toQuestion2();