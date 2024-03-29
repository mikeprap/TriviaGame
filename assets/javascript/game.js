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



    },
    {

        question: "How many teams were in the NHL when it was founded?",
        choices: ["10", "4", "16", "6"],
        answer: "6",


    },
    {

        question: "How many games do each team play in an MLB regular season?",
        choices: ["150", "85", "162", "200"],
        answer: "162",


    },





];


function countDown() {

    count--;
    $('#time').html('timer: ' + count);
    if (count === 0){
        timeUp();
    }
}

function timeUp() {
    clearInterval(timer);
    losses++;
    inBetweenScreen("loss")
    setTimeout(nextQuestion, 5 * 1000);
    
}

function nextQuestion() {
    // add something to stop the game after the last question
    var lastQuestion = (quizQuestions.length - 1) === currentQuestion;
    if (lastQuestion) {
        results();
    }
    else{
    currentQuestion++;
    loadQuestion();
    }
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
// need to create an on click function for the choices
$(document).on("click", ".choice", function(){
    clearInterval(timer)
    // create variables for the players guess and the correct answer
    var userGuess = $(this).attr('data-answer');

    var rightAnswer = quizQuestions[currentQuestion].answer;
    if (userGuess === rightAnswer) {
        score++;
        inBetweenScreen("win");
        setTimeout(nextQuestion, 5 * 1000);
        console.log("test")
    }
    else{
        losses++;
        inBetweenScreen("loss")
        setTimeout(nextQuestion, 5 * 1000);
    }

});

function results(){
    

    var result = ("<p>you got " + [score] + " correct!</p>");
    var loss =  ("<p>you missed " + [losses] + " questions</p>");
    var total = ("<p>Out of " + [quizQuestions.length] + " total questions</p>");


    $("#game").html(result + loss + total);
    


}
function inBetweenScreen(status) {
     answer = quizQuestions[currentQuestion].answer;
   
        
    if (status === "win") {
        correct = ("<p>Correct!</p>");
        theAnswer = ("<p>the answer is " + [answer]);
       
       
        $("#game").html(correct + theAnswer);

        
    }
    else {
        wrong = ("<p>Wrong!</>");
        theAnswer = ("<p>the answer is " + [answer]);
        
        $("#game").html(wrong + theAnswer);

    }


}

$("#start").click(function() {
    $("#start").remove();
    $("#time").html(count);
    loadQuestion();

});

