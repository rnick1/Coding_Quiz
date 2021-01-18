




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