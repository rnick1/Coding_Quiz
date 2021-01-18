// For cards:
var introCard = document.querySelector(".intro-card");
var questionCard1 = document.querySelector(".question-card-1");
var questionCard2 = document.querySelector(".question-card-2");
var questionCard3 = document.querySelector(".question-card-3");
var questionCard4 = document.querySelector(".question-card-4");
var questionCard5 = document.querySelector(".question-card-5");
var conclusionCard = document.querySelector("#conclusion-card");

// For Question 1:
// var question1OpA = document.querySelector("#1QAT");
// var question1OpB = document.querySelector("#1QBF");
// var question1OpC = document.querySelector("#1QCF");
// var question1OpD = document.querySelector("#1QDF");
// var question1OpE = document.querySelector("#1QEF");

// document.querySelectorAll(".btn btn-secondary btn-lg btn-block").forEach(item => {item.addEventListener("click", event => {}})
var correctAnswers = ["1QAT", "2QBT", "3QCT", "4QDT", "5QET"];
var incorrectAnswers = ["1QBF", "1QCF", "1QDF", "1QEF", "2QAF", "2QCF", "2QDF", "2QEF", "3QAF", "3QBF", "3QDF", "3QEF", "4QAF", 
"4QBF", "4QCF", "4QEF", "5QAF", "1QBF", "5QCF", "5QDF"];

// score = 0
// var totalScore = document.querySelector("#score");

// correctAnswers.addEventListener("click", function() {
//     count++;
//     setScore();
// });

// function setScore() {
//     totalScore.textContent = score;
// }

// setScore();







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

// var Q2toQ3 = document.querySelector("#to-question-3");
// var Q3toQ4 = document.querySelector("#to-question-4");
// var Q4toQ5 = document.querySelector("#to-question-5");
// var Q5toFinish = document.querySelector("#to-Finish");

// document.getElementById('generate').addEventListener('click', writePassword);