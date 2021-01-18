// For cards:
var introCard = document.querySelector(".intro-card");
var questionCard1 = document.querySelector(".question-card-1");
var questionCard2 = document.querySelector(".question-card-2");
var questionCard3 = document.querySelector(".question-card-3");
var questionCard4 = document.querySelector(".question-card-4");
var questionCard5 = document.querySelector(".question-card-5");
var conclusionCard = document.querySelector("#conclusion-card");

// For timer:
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

function toQuestion3() {
    questionCard2.setAttribute("style", "display: none");
    questionCard3.setAttribute("style", "display: block");
}

function toQuestion4() {
    questionCard3.setAttribute("style", "display: none");
    questionCard4.setAttribute("style", "display: block");
}

function toQuestion5() {
    questionCard4.setAttribute("style", "display: none");
    questionCard5.setAttribute("style", "display: block");
}

function toFinish() {
    questionCard5.setAttribute("style", "display: none");
    conclusionCard.setAttribute("style", "display: block");
}

// Everything below is related to correct/incorrect answers arrays and addEventListeners:


// document.getElementById('generate').addEventListener('click', writePassword);

// document.querySelectorAll(".btn btn-secondary btn-lg btn-block").forEach(item => {item.addEventListener("click", event => {}})

// .forEach(correctAnswers=> {correctAnswers,addEventListener("click," startTimer()})

var correctAnswers = ["1QAT", "2QBT", "3QCT", "4QDT", "5QET"]
for(i = 0; correctAnswers.length; i++) {
    correctAnswers[i].addEventListener("click", selectsCorrect())
};

function selectsCorrect() {
    score++;

};

var incorrectAnswers = ["1QBF", "1QCF", "1QDF", "1QEF", "2QAF", "2QCF", "2QDF", "2QEF", "3QAF", "3QBF", "3QDF", "3QEF", "4QAF", 
"4QBF", "4QCF", "4QEF", "5QAF", "1QBF", "5QCF", "5QDF"];

var score = document.querySelector("#score");
score = 0

function selectsIncorrect() {
    score--;
};