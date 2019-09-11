// global variables


var count = 30;
var currentQuestion = 0;
var score = 0;
var losses = 0;
var timer;


// questions object



var quizQuestions = [
    {

        question: "What is Philadelphia's football team called?",
        choices: ["Eagles", "Panthers", "Falcons", "Chargers"],
        answer: "Eagles",


    },
    {
        question: "What year was the first Super Bowl played?",
        choices: ["1950", "1962", "1967", "1940"],
        answer: "1967",



    }





];


function countDown() {

    count--;
    $('#time').html('timer:' + count);
    if (count === 0){
        timeUp();
    }
}

function timeUp() {
    clearInterval(timer);
    losses++;
    nextQuestion();
    
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

function loadQuestion() {
    count = 30;
    timer = setInterval(countDown, 1000);
    
    var question = quizQuestions[currentQuestion].question;
    var choices = quizQuestions[currentQuestion].choices;

    $('#time').html('timer: ' + count);

    $('#game').html(`<h5>${question} </h5>
    ${loadChoices(choices)}
    `);



}
// load choices function with a for loop.

function loadChoices(choices) {
    var result = '';

    for (var i = 0; i < choices.length; i++) {
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`
    }
    return result;

}
loadQuestion();