
var introCard = document.querySelector(".intro-card");
var questionCard = document.querySelector(".question-card");
var conclusionCard = document.querySelector(".conclusion-card");

var quizQuestion = document.querySelector("#quiz-question");

var question2 = "What do web developers use to set the style of a web page?";

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
    quizQuestion.textContent = question2;
}

toQuestion2();