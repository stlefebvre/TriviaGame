$(document).ready(function () {
//Questions
    var yearFounded = {
        question: "What year were the Boston Bruins founded?",
        answerChoices: ["1918", "1924", "1920", "1925"],
        correctAnswer: "2"
    }

    var stanleyCups = {
        question: "How many Stanley Cups have the Bruins won?",
        answerChoices: ["5", "4", "6", "3"],
        correctAnswer: "3"
    }

    var willieOree = {
        question: "In 1958, the first black professional hockey player in the NHL stepped onto the ice as a right winger for the Bruins. What is his name?",
        answerChoices: ["Willie O'Ree", "Wayne Simmonds", "PK Subban", "Bill Riley"],
        correctAnswer: "1"
    }

    var zdenoChara = {
        question: "Bruins captain Zdeno Chara holds the all-time record for the Hardest Shot event at the NHL All-Star Game. How fast was this shot recorded at?",
        answerChoices: ["107.8 mph", "108.8 mph", "108.5 mph", "109.1 mph"],
        correctAnswer: "2"
    }

    var bobbyOrr = {
        question: "It goes without saying that Bruins legend Bobby Orr was the greatest player of all time. Among his many records, he still holds the all-time record for Plus-Minus by a single player in one single season. What was his Plus-Minus?",
        answerChoices: ["+129", "+120", "+126", "+124"],
        correctAnswer: "4"
    }

    var allQuestions = [yearFounded, stanleyCups, willieOree, zdenoChara, bobbyOrr]

    //Variables to keep score
    var userScore = 0
    var incorrectAnswer = 0

    //Variables for timer
    var allowedTime = 15
    var intervalID
    //Variable to determine if timer is running. Needed to allow timer to stop upon submitting an answer
    var timerRunning = false

    //Functions for running/stopping timer
    
    function run () {
        clearInterval(intervalID);
        intervalID = setInterval(decrement, 1000);
    }

    //Function to start timer countown upon button click
    function decrement() {
        timerRunning = true;
        //decrease allowed time number by 1
        allowedTime--;
        $("#time-left-display").html(allowedTime);
        //if number hits zero...
        if (allowedTime === 0) {
            stop();
            alert("Time's Up!")
        }
    }

    function stop() {
        clearInterval(intervalID);
        timerRunning = false;
    }
    

    //Try writing out function to loop through allQuestions variables to alternate which question is displayed in the questions forms div




//======================== BEGINNING GAME ==========================//

//Hides all but the button. No timer set.
    $("#timer-display").hide();
    $(".next").hide();
    $("#get-score").hide();
    $("#time-left-display").hide();
    $("#questions-form").hide();
    $("#year-founded-answers").hide();
    $("#stanley-cups-answers").hide();
    $("#willie-oree-answers").hide();
    $("#zdeno-chara-answers").hide();
    $("#bobby-orr-answers").hide();
    $("#final-score").hide()

    //When start button is clicked..
    $("#start-game").on("click", function () {
        run ();
        decrement ()
        $("#time-left-display").show();
        $(".next").hide()
        $("#submit").show()
        $("#start-game").hide();
        $("#questions-form").show();
        $("#question-goes-here").html(allQuestions[0].question);
        $("#answer1").html(allQuestions[0].answerChoices[0]); 
        $("#answer2").html(allQuestions[0].answerChoices[1]);
        $("#answer3").html(allQuestions[0].answerChoices[2]);
        $("#answer4").html(allQuestions[0].answerChoices[3]);
    });

    //When an answer is selected
        $('#form-id input').on('change', function () {
            $("#submit").on("click", function () {
            var userAnswer = ($("input[name=answerChoices]:checked", "#form-id").val());
            console.log(userAnswer);
                if (userAnswer === allQuestions[0].correctAnswer && allowedTime >= 0) {
                    stop();
                    console.log("correct");
                    userScore++;
                    console.log("Current Score: " + userScore);
                    $("#year-founded-answers").show();
                    $("#year-founded-correct").show();
                    $("#year-founded-incorrect").hide();
                    $("#year-founded-timesup").hide()
                } else if (userAnswer !== allQuestions[0].correctAnswer && allowedTime >= 0) {
                    stop();
                    console.log("Incorrect");
                    incorrectAnswer++
                    console.log("Current Score: " + userScore);
                    console.log("Incorrect Answers: " + incorrectAnswer)
                    $("#year-founded-answers").show()
                    $("#year-founded-correct").hide()
                    $("#year-founded-incorrect").show()
                    $("#year-founded-timesup").hide()
                }
    })});
})