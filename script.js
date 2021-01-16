// Welcome/instructions card.
var greeting = "Welcome to the Week 4 Coding Quiz!";

// These are the question variables.
var question1 = "What is HTML?";
var question2 = "What is CSS?";
var question3 = "What is JavaScript?";
var question4 = "What are Web API's?";
var question5 = "What are Third-Party API's?";

// These are the answer variables...solution a for question 1, solution b for question 1, etc.
var answerA = "";
var answerB = "";
var answerC = "";
var answerD = "";
var answerE = "";

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
    document.getElementById("quiz-question").innerHTML = "What is HTML?"; 
    document.getElementById("quiz-question").innerHTML = ""; 
    document.getElementById("quiz-question").innerHTML = "What is HTML?"; 

};

// Question 1:

// var quizQuestion1 = document.getElementsByClassName("card-title mb-3")

// function displayQuestion1() {
//     document.getElementsByClassName("card-title mb-3").innerHTML = question1; 
// }


// document.getElementById("start").addEventListener("click", startTimer);



// document.getElementById("start").addEventListener("click", displayQuestion1);

// document.getElementById("demo").innerHTML = "Paragraph changed!";
