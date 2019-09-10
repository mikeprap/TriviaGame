// global variables


var count = 30;
var currentQuestion = 0;
var score = 0;
var losses = 0;
var timer;


// questions object



const quizQuestions = [
    {

        question: "What is Philadelphia's football team called?",
        choices: ["Eagles", "Panthers", "Falcons", "Chargers"],
        answer: "Eagles",


    },
    {
        question: "",
        choices: [],
        answer: "",



    }





];


function countDown() {

    count--;
    $('#time').html('timer:' + count);
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


function loadChoices(choices) {
    var result = '';

    for (var i = 0; i < choices.length; i++) {
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`
    }
    return result;

}
loadQuestion();