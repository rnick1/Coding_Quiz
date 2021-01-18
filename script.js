var timeLeft = document.querySelector("#time-left");
var introCard = document.querySelector("#intro-card");
var startQuizButton = document.getElementById("start-quiz-button").addEventListener("click", startTimer);
var questionCard = document.querySelector("#question-card");
var quizQuestion = document.querySelector("#quiz-question");
var quizOptions = document.querySelector("#quiz-options");
var result = document.querySelector("#result");
var nextQuestion = document.querySelector("#next");

// For timer:
var secondsLeft = 75;

function startTimer() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = secondsLeft + " seconds remaining";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("I am sorry, but you have run out of time. Better luck next time!");
        }
    }, 1000);

};














// // For cards:
// var introCard = document.querySelector(".intro-card");
// var questionCard1 = document.querySelector(".question-card-1");
// var questionCard2 = document.querySelector(".question-card-2");
// var questionCard3 = document.querySelector(".question-card-3");
// var questionCard4 = document.querySelector(".question-card-4");
// var conclusionCard = document.querySelector("#conclusion-card");

// // For score counter:

// document.getElementById("1QAT").addEventListener("click",selectCorrect);
// document.getElementById("1QBF").addEventListener("click",selectIncorrect);
// document.getElementById("1QCF").addEventListener("click",selectIncorrect);
// document.getElementById("1QDF").addEventListener("click",selectIncorrect);

// document.getElementById("2QAF").addEventListener("click",selectIncorrect);
// document.getElementById("2QBT").addEventListener("click",selectCorrect);
// document.getElementById("2QCF").addEventListener("click",selectIncorrect);
// document.getElementById("2QDF").addEventListener("click",selectIncorrect);

// document.getElementById("3QAF").addEventListener("click",selectIncorrect);
// document.getElementById("3QBF").addEventListener("click",selectIncorrect);
// document.getElementById("3QCT").addEventListener("click",selectCorrect);
// document.getElementById("3QDF").addEventListener("click",selectIncorrect);

// document.getElementById("4QAF").addEventListener("click",selectIncorrect);
// document.getElementById("4QBF").addEventListener("click",selectIncorrect);
// document.getElementById("4QCF").addEventListener("click",selectIncorrect);
// document.getElementById("4QDT").addEventListener("click",selectCorrect);

// var questionResult = document.getElementByClassName("result");

// function selectCorrect() {
//     questionResult.textContent = "Correct!";
// };

// function selectIncorrect() {
//     questionResult.textContent = "Incorrect!";
// };

// // For timer:
// var timeLimit = document.getElementById("time");
// var secondsLeft = 75;

// function startTimer() {
//     timerInterval = setInterval(function() {
//         secondsLeft--;
//         timeLimit.textContent = secondsLeft + " seconds remaining.";

//         if(secondsLeft === 0) {
//             clearInterval(timerInterval);
//             alert("I am sorry, but you have run out of time. Better luck next time!");
//         }
//     }, 1000);

//     introCard.setAttribute("style", "display: none");
//     questionCard1.setAttribute("style", "display: block");
// };

// function toQuestion2() {
//     questionCard1.setAttribute("style", "display: none");
//     questionCard2.setAttribute("style", "display: block");
// }

// function toQuestion3() {
//     questionCard2.setAttribute("style", "display: none");
//     questionCard3.setAttribute("style", "display: block");
// }

// function toQuestion4() {
//     questionCard3.setAttribute("style", "display: none");
//     questionCard4.setAttribute("style", "display: block");
// }

// function toFinish() {
//     questionCard4.setAttribute("style", "display: none");
//     conclusionCard.setAttribute("style", "display: block");
// }