// Second attempt with the project:
// For cards:
var introCard = document.querySelector(".intro-card");
var questionCard1 = document.querySelector(".question-card-1");
var questionCard2 = document.querySelector(".question-card-2");
var questionCard3 = document.querySelector(".question-card-3");
var questionCard4 = document.querySelector(".question-card-4");
var conclusionCard = document.querySelector("#conclusion-card");

// For score counter:

document.getElementById("1QAT").addEventListener("click",selectCorrect);
document.getElementById("1QBF").addEventListener("click",selectIncorrect);
document.getElementById("1QCF").addEventListener("click",selectIncorrect);
document.getElementById("1QDF").addEventListener("click",selectIncorrect);

document.getElementById("2QAF").addEventListener("click",selectIncorrect);
document.getElementById("2QBT").addEventListener("click",selectCorrect);
document.getElementById("2QCF").addEventListener("click",selectIncorrect);
document.getElementById("2QDF").addEventListener("click",selectIncorrect);

document.getElementById("3QAF").addEventListener("click",selectIncorrect);
document.getElementById("3QBF").addEventListener("click",selectIncorrect);
document.getElementById("3QCT").addEventListener("click",selectCorrect);
document.getElementById("3QDF").addEventListener("click",selectIncorrect);

document.getElementById("4QAF").addEventListener("click",selectIncorrect);
document.getElementById("4QBF").addEventListener("click",selectIncorrect);
document.getElementById("4QCF").addEventListener("click",selectIncorrect);
document.getElementById("4QDT").addEventListener("click",selectCorrect);

var questionResult = document.getElementByClassName("result");

function selectCorrect() {
    questionResult.textContent = "Correct!";
};

function selectIncorrect() {
    questionResult.textContent = "Incorrect!";
};

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

function toFinish() {
    questionCard4.setAttribute("style", "display: none");
    conclusionCard.setAttribute("style", "display: block");
}



// var A1T = document.getElementById("#1QAT");
// var B1F = document.getElementById("#1QBF");
// var C1F = document.getElementById("#1QCF");
// var D1F = document.getElementById("#1QDF");

// var A2F = document.getElementById("#2QAF");
// var B2T = document.getElementById("#2QBT");
// var C2F = document.getElementById("#2QCF");
// var D2F = document.getElementById("#2QDF");

// var A3F = document.getElementById("#3QAF");
// var B3F = document.getElementById("#3QBF");
// var C3T = document.getElementById("#3QCT");
// var D3F = document.getElementById("#3QDF");

// var A4F = document.getElementById("#4QAF");
// var B4F = document.getElementById("#4QBF");
// var C4F = document.getElementById("#4QCF");
// var D4T = document.getElementById("#4QDT");

// var correctAnswers = ["A1T", "B2T", "C3T", "D4T"];
// var incorrectAnswers = ["B1F", "C1F", "D1F", "A2F", "C2F", "D2F", "A3F", "B3F", "D3F", "A4F", "B4F", "C4F"];

// var score = 0

// A1T.addEventListener("click", selectCorrect());
// // incorrectAnswers.addEventListener("click", selectIncorrect());



// First attempt with the project:
var navTimer = document.querySelector("#timer");
var introSubmit = document.querySelector("#introSubmit");

var q1True = document.querySelector("#q1True");
var q1False1 = document.querySelector("#q1False1");
var q1False2 = document.querySelector("#q1False2");
var q1False3 = document.querySelector("#q1False3");
var q1False4 = document.querySelector("#q1False4");

var q2True = document.querySelector("#q2True");
var q2False1 = document.querySelector("#q2False1");
var q2False2 = document.querySelector("#q2False2");
var q2False3 = document.querySelector("#q2False3");
var q2False4 = document.querySelector("#q2False4");

var q3True = document.querySelector("#q3True");
var q3False1 = document.querySelector("#q3False1");
var q3False2 = document.querySelector("#q3False2");
var q3False3 = document.querySelector("#q3False3");
var q3False4 = document.querySelector("#q3False4");

var q4True = document.querySelector("#q4True");
var q4False1 = document.querySelector("#q4False1");
var q4False2 = document.querySelector("#q4False2");
var q4False3 = document.querySelector("#q4False3");
var q4False4 = document.querySelector("#q4False4");

var q5True = document.querySelector("#q5True");
var q5False1 = document.querySelector("#q5False1");
var q5False2 = document.querySelector("#q5False2");
var q5False3 = document.querySelector("#q5False3");
var q5False4 = document.querySelector("#q5False4");

var q1Result = document.querySelector(".displayResult1");
var q2Result = document.querySelector(".displayResult2");
var q3Result = document.querySelector(".displayResult3");
var q4Result = document.querySelector(".displayResult4");
var q5Result = document.querySelector(".displayResult5");

var q1Submit = document.querySelector("#q1Submit");
var q2Submit = document.querySelector("#q2Submit");
var q3Submit = document.querySelector("#q3Submit");
var q4Submit = document.querySelector("#q4Submit");
var q5Submit = document.querySelector("#q5Submit");

var intro = document.querySelector(".intro");
var q1 = document.querySelector("#q1");
var q2 = document.querySelector(".q2");
var q3 = document.querySelector(".q3");
var q4 = document.querySelector(".q4");
var q5 = document.querySelector(".q5");

timeremaining =75;

document.getElementById("#introSubmit").addEventListener('click', startQuiz);

function startQuiz () {
    q1.setAttribute("style", "display: block;");
    intro.setAttribute("style", "display: hide;");
};

startQuiz();