var timeLeft = document.querySelector('#time-left');
var introCard = document.querySelector('#intro-card');
var startQuizButton = document.getElementById('start-quiz-button').addEventListener('click', startQuiz);
var questionCard = document.querySelector('#question-card');
var quizQuestion = document.querySelector('#quiz-question');
var quizOptions = document.querySelector('#quiz-options');
var result = document.querySelector('#result');
var nextQuestion = document.querySelector('#next');
var quizOptionA = document.querySelector('#qOptionA');
var quizOptionB = document.querySelector('#qOptionB');
var quizOptionC = document.querySelector('#qOptionC');
var quizOptionD = document.querySelector('#qOptionD');
var quizQuestion1 = 'What do web developers use to structure a web page?';
var quizQuestion2 = 'What do web developers use to set the style of a web page?';
var quizQuestion3 = 'What do web developers use to set the functionality of a web page?';
var quizQuestion4 = 'What do web developers use to manipulate a web page using the DOM structure?';

var count = 0;

// For timer:
var secondsLeft = 75;

function startQuiz() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = secondsLeft + ' seconds remaining';

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            alert('I am sorry, but you have run out of time. Better luck next time!');
        };
    }, 1000);
    introCard.setAttribute('style', 'display: none');
    questionCard.setAttribute('style', 'display: block');
    setupQuestion1();
};

function setupQuestion1() {
    quizQuestion.textContent = quizQuestion1;
    quizOptionA.addEventListener('click', selectsCorrect);
    quizOptionB.addEventListener('click', selectsIncorrect);
    quizOptionC.addEventListener('click', selectsIncorrect);
    quizOptionD.addEventListener('click', selectsIncorrect);
    nextQuestion.addEventListener('click', setupQuestion2);
};

function setupQuestion2() {
    result.textContent = '';
    quizQuestion.textContent = quizQuestion2;
    quizOptionA.removeEventListener('click', selectsCorrect);
    quizOptionB.removeEventListener('click', selectsIncorrect);
    quizOptionC.removeEventListener('click', selectsIncorrect);
    quizOptionD.removeEventListener('click', selectsIncorrect);
    quizOptionA.addEventListener('click', selectsIncorrect);
    quizOptionB.addEventListener('click', selectsCorrect);
    quizOptionC.addEventListener('click', selectsIncorrect);
    quizOptionD.addEventListener('click', selectsIncorrect);
    quizOptionA.disabled = false;
    quizOptionB.disabled = false;
    quizOptionC.disabled = false;
    quizOptionD.disabled = false;
    nextQuestion.addEventListener('click', setupQuestion3);
};

function setupQuestion3() {
    quizQuestion.textContent = quizQuestion3;
    quizOptionA.removeEventListener('click', selectsIncorrect);
    quizOptionB.removeEventListener('click', selectsCorrect);
    quizOptionC.removeEventListener('click', selectsIncorrect);
    quizOptionD.removeEventListener('click', selectsIncorrect);
    quizOptionA.addEventListener('click', selectsIncorrect);
    quizOptionB.addEventListener('click', selectsIncorrect);
    quizOptionC.addEventListener('click', selectsCorrect);
    quizOptionD.addEventListener('click', selectsIncorrect);
    nextQuestion.addEventListener('click', setupQuestion4);
};

function setupQuestion4() {
    quizQuestion.textContent = quizQuestion4;
    quizOptionA.removeEventListener('click', selectsIncorrect);
    quizOptionB.removeEventListener('click', selectsIncorrect);
    quizOptionC.removeEventListener('click', selectsCorrect);
    quizOptionD.removeEventListener('click', selectsIncorrect);
    quizOptionA.addEventListener('click', selectsIncorrect);
    quizOptionB.addEventListener('click', selectsIncorrect);
    quizOptionC.addEventListener('click', selectsIncorrect);
    quizOptionD.addEventListener('click', selectsCorrect);
    nextQuestion.addEventListener('click', setupConclusion);
};

function selectsCorrect(event) {
    result.textContent = 'Correct!';
    count++;
    quizOptionA.disabled = true;
    quizOptionB.disabled = true;
    quizOptionC.disabled = true;
    quizOptionD.disabled = true;
    totalScore.textContent = count + ' out of four!';
};

function selectsIncorrect(event) {
    result.textContent = 'Incorrect!';
    quizOptionA.disabled = true;
    quizOptionB.disabled = true;
    quizOptionC.disabled = true;
    quizOptionD.disabled = true;
    secondsLeft -=10;
};

var totalScore = document.querySelector('#score');
var conclusionCard = document.querySelector('#conclusion-card');
var scoresCard = document.querySelector('#scores-card');
var userInitials = document.querySelector('#user-initials');
var goToScore = document.getElementById('go-to-score');
var displayedResult = document.querySelector("#displayed-result");
var saveScore = document.getElementById('save-score'); 
var savedUserScores = [];
var localStorageContent = localStorage.getItem("savedUserScores");
console.log(localStorageContent);

if(localStorageContent !== null) {
    savedUserScores = JSON.parse(localStorageContent);
}
console.log(savedUserScores);
function setupConclusion() {
    questionCard.setAttribute('style', 'display: none');
    conclusionCard.setAttribute('style', 'display: block');
    clearInterval(timerInterval);
    goToScore.addEventListener('click', setupScores);
};

saveScore.addEventListener('click', function(event) {
    var userScore = {
        Initials: userInitials.value,
        Score: count,
    };
    console.log(userScore);
    savedUserScores.push(userScore);
    event.preventDefault();

localStorage.setItem('savedUserScores', JSON.stringify(savedUserScores));
});

  function setupScores() {
    conclusionCard.setAttribute('style', 'display: none');
    scoresCard.setAttribute('style', 'display: block');
    for (var i = 0; i < savedUserScores.length; i++) {
        var scoreText = savedUserScores[i].Initials;
        var scoreNumber = savedUserScores[i].Score;
        console.log(savedUserScores[i].Initials);
        var currentScore = document.createElement("li");
        currentScore.textContent = scoreText + " " + scoreNumber;
        displayedResult.append(currentScore);
    };
};