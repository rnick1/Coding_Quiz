var timeLeft = document.querySelector("#time-left");
var introCard = document.querySelector("#intro-card");
var startQuizButton = document.getElementById("start-quiz-button").addEventListener("click", startQuiz);
var questionCard = document.querySelector("#question-card");
var quizQuestion = document.querySelector("#quiz-question");
var quizOptions = document.querySelector("#quiz-options");
var result = document.querySelector("#result");
var nextQuestion = document.querySelector("#next");

var quizOptionA = document.querySelector("#qOptionA")
var quizOptionB = document.querySelector("#qOptionB")
var quizOptionC = document.querySelector("#qOptionC")
var quizOptionD = document.querySelector("#qOptionD")

var quizQuestion1 = "What do web developers use to structure a web page?";
var quizQuestion2 = "What do web developers use to set the style of a web page?";
var quizQuestion3 = "What do web developers use to set the functionality of a web page?";
var quizQuestion4 = "What do web developers use to manipulate a web page using the DOM structure?";
// Score counter:
var totalScore = document.querySelector("#score");
var count = 0;

function incrementScore() {
    totalScore.textContent = count + " out of four!"
};

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

function setupQuestion1() {
    quizQuestion.textContent = quizQuestion1
    quizOptionA.addEventListener("click", selectsCorrect);
    quizOptionB.addEventListener("click", selectsIncorrect);
    quizOptionC.addEventListener("click", selectsIncorrect);
    quizOptionD.addEventListener("click", selectsIncorrect);
    
    function selectsCorrect() {
        result.textContent = "Correct!";
        quizOptionA.disabled = true;
        quizOptionB.disabled = true;
        quizOptionC.disabled = true;
        quizOptionD.disabled = true;
        count++;
        incrementScore();
    };

    function selectsIncorrect() {
        result.textContent = "Incorrect!";
        quizOptionA.disabled = true;
        quizOptionB.disabled = true;
        quizOptionC.disabled = true;
        quizOptionD.disabled = true;

    nextQuestion.addEventListener("click", setupQuestion2);
};

function setupQuestion2() {
    quizQuestion.textContent = quizQuestion2
    quizOptionA.addEventListener("click", selectsIncorrect);
    quizOptionB.addEventListener("click", selectsCorrect);
    quizOptionC.addEventListener("click", selectsIncorrect);
    quizOptionD.addEventListener("click", selectsIncorrect);
    quizOptionA.disabled = false;
    quizOptionB.disabled = false;
    quizOptionC.disabled = false;
    quizOptionD.disabled = false;

    function selectsCorrect() {
        result.textContent = "Correct!";
    };

    function selectsIncorrect() {
        result.textContent = "Incorrect!";
    };

    nextQuestion.addEventListener("click", setupQuestion3);
};

function setupQuestion3() {
    quizQuestion.textContent = quizQuestion3
    quizOptionA.addEventListener("click", selectsIncorrect);
    quizOptionB.addEventListener("click", selectsIncorrect);
    quizOptionC.addEventListener("click", selectsCorrect);
    quizOptionD.addEventListener("click", selectsIncorrect);
    
    function selectsCorrect() {
        result.textContent = "Correct!";
    };

    function selectsIncorrect() {
        result.textContent = "Incorrect!";
    };

    nextQuestion.addEventListener("click", setupQuestion4);
};

function setupQuestion4() {
    quizQuestion.textContent = quizQuestion4
    quizOptionA.addEventListener("click", selectsIncorrect);
    quizOptionB.addEventListener("click", selectsIncorrect);
    quizOptionC.addEventListener("click", selectsIncorrect);
    quizOptionD.addEventListener("click", selectsCorrect);
    
    function selectsCorrect() {
        result.textContent = "Correct!";
    };

    function selectsIncorrect() {
        result.textContent = "Incorrect!";
    };

    nextQuestion.addEventListener("click", setupConclusion);
}};