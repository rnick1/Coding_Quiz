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