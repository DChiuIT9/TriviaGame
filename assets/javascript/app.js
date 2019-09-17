
var timeremain = 30;
var intervalId;

function start () {
    $("#start_sect").empty();
    // var timeDiv = $("<div>");
    intervalId = setInterval(time, 1000);
    
}

function time () {
    timeremain--;
    $("#countdown").text("Time Remaining: " + timeremain + " sec");
    if (timeremain === 0) {
        alert("Time's Up!");
    }
}


$(document).ready(function(){
    $("#startbtn").on("click", start);
    
})




var qna = [
    {
    "question" : "What is the first stage of combustion?",
    "corr_ans" : "Intake",
    "wrong_ans" : ["Compression", "Spark", "Exhaust"]
    },
    {
        "question" : "The connecting rod connects the piston to the crankshaft. True or False?",
        "corr_ans" : true,
        "wrong_ans" : false
    },
    {
        "question" : "What is the purpose of a clutch?",
        "corr_ans" : "To connect and disconnect powerflow between the engine and transmission.",
        "wrong_ans" : ["To assist and smooth out shifting.", "To provide a safe transition between shifts."]
    },
    {
        "question" : "What animal is on the Porsche logo?",
        "corr_ans" : "Horse",
        "wrong_ans" : ["Lian", "Bull", "Bird"]
    }
]


