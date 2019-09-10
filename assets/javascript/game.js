var count = 30;
var currentQuestion = 0;
var score = 0;
var losses = 0;
var timer;








var quizQuestions = [
    {

        question: "What is Philadelphia's football team called?",
        choices: ["Eagles", "Panthers", "Falcons", "Chargers"],
        answer: "",


    },
    {
        question: "",
        choices: [],
        answer: "",



    },





];

function countDown() {

    count--;
    $('#time').html('timer:' + counter);
}

function loadQuestion(){
    count = 30;
    timer = setInterval(countDown, 1000);
    var question = quizQuestions[currentQuestion].question;
    var choices = quizQuestions[currentQuestion].choices;
    $('#time').html('timer: ' + count);
    $('#game').html('<h5>' + question + '</h4>');
    $

}


function loadChoices(choices) {
    var result = '';

    for (var i = 0; i <choices.length; i++){

    }

}
loadQuestion();