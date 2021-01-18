var timeLeft = document.querySelector("#time-left");
var introCard = document.querySelector("#intro-card");
var startQuizButton = document.getElementById("start-quiz-button").addEventListener("click", startQuiz);
var questionCard = document.querySelector("#question-card");
var quizQuestion = document.querySelector("#quiz-question");
var quizOptions = document.querySelector("#quiz-options");
var result = document.querySelector("#result");
var nextQuestion = document.querySelector("#next");

// For timer:
var secondsLeft = 75;

function startQuiz() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = secondsLeft + " seconds remaining";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("I am sorry, but you have run out of time. Better luck next time!");
        }
    }, 1000);
    introCard.setAttribute("style", "display: none");
    questionCard.setAttribute("style", "display: block");
    setupQuestion1();
};

var question1 = {
    question: "What do web developers use to structure a web page?",
    optionA: "HTML",
    optionB: "CSS",
    optionC: "JavaScript",
    optionD: "Web API's",
    questionResult:" ",
};

var question2 = {
    question: "What do web developers use to set the style of a web page?",
    optionA: "HTML",
    optionB: "CSS",
    optionC: "JavaScript",
    optionD: "Web API's",
};

var question3 = {
    question: "What do web developers use to set the functionality of a web page?",
    optionA: "HTML",
    optionB: "CSS",
    optionC: "JavaScript",
    optionD: "Web API's",
};

var question4 = {
    question: "What do web developers use to manipulate a web page using the DOM structure?",
    optionA: "HTML",
    optionB: "CSS",
    optionC: "JavaScript",
    optionD: "Web API's",
};

// function addToVariable() {
//     storeVariable = [];
//     push.storeVariable()
// }
// // When user clicks on one of these options, the result will go to addToVariable(). addToVariable will push the result to storeVariable.
// var quizOptionA = document.querySelector("#qOptionA").addEventListener("click", addToVariable);
// var quizOptionB = document.querySelector("#qOptionB").addEventListener("click",);
// var quizOptionC = document.querySelector("#qOptionC").addEventListener("click",);
// var quizOptionD = document.querySelector("#qOptionD").addEventListener("click",);


function setupQuestion1() {
    quizQuestion.textContent = question1.question
    quizOptionA.textContent = question1.optionA
    quizOptionB.textContent = question1.optionB
    quizOptionC.textContent = question1.optionC
    quizOptionD.textContent = question1.optionD

    var quizOptionA = document.querySelector("#qOptionA").addEventListener("click", selectsCorrect());
    var quizOptionB = document.querySelector("#qOptionB").addEventListener("click", selectsIncorrect);
    var quizOptionC = document.querySelector("#qOptionC").addEventListener("click", selectsIncorrect);
    var quizOptionD = document.querySelector("#qOptionD").addEventListener("click", selectsIncorrect);
    
    selectsCorrect() {
        question1.questionResult.textContent = "Correct!";
    };

    selectsIncorrect() {
        question1.questionResult.textContent = "Incorrect!";
    };

    // if(quizOptionA === true) {

    // }
}


















function setupQuestion2() {
    quizQuestion.textContent = question2.question
    quizOptionA.textContent = question2.optionA
    quizOptionB.textContent = question2.optionB
    quizOptionC.textContent = question2.optionC
    quizOptionD.textContent = question2.optionD
}













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