var introCard = document.querySelector(".intro-card");
var questionCard1 = document.querySelector(".question-card-1");
var questionCard2 = document.querySelector(".question-card-2");
var questionCard3 = document.querySelector(".question-card-3");
var questionCard4 = document.querySelector(".question-card-4");
var questionCard5 = document.querySelector(".question-card-5");

var conclusionCard = document.querySelector(".conclusion-card");

var quizQuestion = document.querySelector("#quiz-question");

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
    questionCard1.setAttribute("style", "display: block");
};

function toQuestion2() {
    questionCard1.setAttribute("style", "display: none");
    questionCard2.setAttribute("style", "display: block");
}



// var question3 = "What do web developers use to set the functionality of a web page?";
// var question4 = "What do web developers use to manipulate a web page using the DOM structure?";
// var question5 = "What can web developers use to their use of JavaScript?";

// var Q2toQ3 = document.querySelector("#to-question-3");
// var Q3toQ4 = document.querySelector("#to-question-4");
// var Q4toQ5 = document.querySelector("#to-question-5");
// var Q5toFinish = document.querySelector("#to-Finish");

// document.getElementById('generate').addEventListener('click', writePassword);