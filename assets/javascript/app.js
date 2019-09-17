
var timeremain = 30;
var intervalId;

var correct = 0;
var wrong = 0;
var unanswered = 0;

var questionSect = $("#question");


function start () {
    $("#startbtn").remove();
    // var timeDiv = $("<div>");
    intervalId = setInterval(time, 1000);
    for (var i = 0; i < qna.length; i++) {
        $("#question").append(qna[i].question + "<br><br>");
        for (var a = 0; a < qna[i].ansList.length; a++) {
            // $("#question").append(qna[i].ansList[a] + "<br>");
            $("#question").append("<input type='radio' name='answer" + i + "' value='" + qna[i].ansList[a] + "''>" + qna[i].ansList[a]);
        }
        $("#question").append("<hr>")
        console.log(qna[i].question);
        console.log(qna[i].ansList);
    }
    $("#question").append("<button id='submitbtn'>Submit</button>");
}

function time () {
    timeremain--;
    $("#countdown").text("Time Remaining: " + timeremain + " sec");
    if (timeremain === 0) {
        final ();
    }
}

function final () {
    stoptimer()
    $("#countdown").remove();
    $("#question").remove();
    correct = 0;
    wrong = 0;
    unanswered = 0;
    $("#bottom").append("Correct: " + correct + "<br>");
    $("#bottom").append("Wrong: " + wrong + "<br>");
    $("#bottom").append("Unanswered: " + unanswered + "<br>");
}

function stoptimer() {
    clearInterval(intervalId);
}

$(document).ready(function(){
    $("#startbtn").on("click", start);

})




var qna = [
    {
        question : "What is the first stage of combustion?",
        ansList : ["Intake", "Compression", "Spark", "Exhaust"],
        answer : 0
    },
    {
        question : "The connecting rod connects the piston to the crankshaft. True or False?",
        ansList : [true, false],
        answer : 0
    },
    {
        question : "What is the purpose of a clutch?",
        ansList : ["To assist and smooth out shifting.", "To connect and disconnect powerflow between the engine and transmission.", "To provide a safe transition between shifts."],
        answer : 1
    },
    {
        question : "What animal is on the Porsche logo?",
        ansList : ["Lian", "Bull", "Bird", "Horse"],
        answer : 3
    }
]


