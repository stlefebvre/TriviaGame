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
        function decrement () {
            timerRunning = true;
            //decrease allowed time number by 1
            allowedTime--;
            $("#time-left-display").html(allowedTime);
            //if number hits zero...
            if (allowedTime === 0) {
                stop();
                console.log("Time's Up!")
            }
        }
    
        function stop() {
            clearInterval(intervalID);
            timerRunning = false;
        }

        function renderSecondQuestion () {
            $("#answer1q2").html(allQuestions[1].answerChoices[0]); 
            $("#answer2q2").html(allQuestions[1].answerChoices[1]);
            $("#answer3q2").html(allQuestions[1].answerChoices[2]);
            $("#answer4q2").html(allQuestions[1].answerChoices[3]);
            setTimeout(function () {
                if (!($("#form-id2 input").is(':checked')) && allowedTime === 0) {
                    stop();
                    console.log("Incorrect");
                    incorrectAnswer++
                    console.log("Current Score: " + userScore);
                    console.log("Incorrect Answers: " + incorrectAnswer)
                    $("#stanley-cups-answers").show()
                    $("#stanley-cups-correct").hide()
                    $("#stanley-cups-incorrect").hide()
                    $("#stanley-cups-timesup").show();
                }
            }, 1000 * 15.5);
            setTimeout(function () {
                if (!($("#form-id2 input").is(':checked')) && allowedTime === 0) {
                    $("#stanley-cups-answers").hide()
                    $("#question-goes-here").html(allQuestions[2].question);
                    renderThirdQuestion();
                    $("#questions-form").show();
                    $("#form-id").hide();
                    $("#form-id2").hide();
                    $("#form-id3").show();
                    $("#form-id4").hide();
                    $("#form-id5").hide();
                    allowedTime = 15
                    run();
                    decrement();
                }
            }, 1000 * 17) 
        }

        function renderThirdQuestion () {
            $("#answer1q3").html(allQuestions[2].answerChoices[0]); 
            $("#answer2q3").html(allQuestions[2].answerChoices[1]);
            $("#answer3q3").html(allQuestions[2].answerChoices[2]);
            $("#answer4q3").html(allQuestions[2].answerChoices[3]);
            setTimeout(function () {
                if (!($("#form-id3 input").is(':checked')) && allowedTime === 0) {
                    stop();
                    console.log("Incorrect");
                    incorrectAnswer++
                    console.log("Current Score: " + userScore);
                    console.log("Incorrect Answers: " + incorrectAnswer)
                    $("#willie-oree-answers").show()
                    $("#willie-oree-correct").hide()
                    $("#willie-oree-incorrect").hide()
                    $("#willie-oree-timesup").show();
                }
            }, 1000 * 15.5);
            setTimeout(function () {
                if (!($("#form-id3 input").is(':checked')) && allowedTime === 0) {
                    $("#willie-oree-answers").hide()
                    $("#question-goes-here").html(allQuestions[3].question);
                    renderFourthQuestion();
                    $("#questions-form").show();
                    $("#form-id").hide();
                    $("#form-id2").hide();
                    $("#form-id3").hide();
                    $("#form-id4").show();
                    $("#form-id5").hide();
                    allowedTime = 15
                    run();
                    decrement();
                }
            }, 1000 * 17) 
        }

        function renderFourthQuestion() {
            $("#answer1q4").html(allQuestions[3].answerChoices[0]); 
            $("#answer2q4").html(allQuestions[3].answerChoices[1]);
            $("#answer3q4").html(allQuestions[3].answerChoices[2]);
            $("#answer4q4").html(allQuestions[3].answerChoices[3]);
            setTimeout(function () {
                if (!($("#form-id4 input").is(':checked')) && allowedTime === 0) {
                    stop();
                    console.log("Incorrect");
                    incorrectAnswer++
                    console.log("Current Score: " + userScore);
                    console.log("Incorrect Answers: " + incorrectAnswer)
                    $("#zdeno-chara-answers").show()
                    $("#zdeno-chara-correct").hide()
                    $("#zdeno-chara-incorrect").hide()
                    $("#zdeno-chara-timesup").show();
                }
            }, 1000 * 15.5);
            setTimeout(function () {
                if (!($("#form-id4 input").is(':checked')) && allowedTime === 0) {
                    $("#zdeno-chara-answers").hide()
                    $("#question-goes-here").html(allQuestions[4].question);
                    renderFifthQuestion();
                    $("#questions-form").show();
                    $("#form-id").hide();
                    $("#form-id2").hide();
                    $("#form-id3").hide();
                    $("#form-id4").hide();
                    $("#form-id5").show();
                    allowedTime = 15
                    run();
                    decrement();
                }
            }, 1000 * 17) 
        }

        function renderFifthQuestion() {
            $("#answer1q5").html(allQuestions[4].answerChoices[0]); 
            $("#answer2q5").html(allQuestions[4].answerChoices[1]);
            $("#answer3q5").html(allQuestions[4].answerChoices[2]);
            $("#answer4q5").html(allQuestions[4].answerChoices[3]);
        }
        
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
            $("#start-game").hide();
            $("#questions-form").show();
                $("#form-id").show();
                $("#form-id2").hide();
                $("#form-id3").hide();
                $("#form-id4").hide();
                $("#form-id5").hide();
            $("#question-goes-here").html(allQuestions[0].question);
            $("#answer1").html(allQuestions[0].answerChoices[0]); 
            $("#answer2").html(allQuestions[0].answerChoices[1]);
            $("#answer3").html(allQuestions[0].answerChoices[2]);
            $("#answer4").html(allQuestions[0].answerChoices[3]);
            //After allowedTime of 15 seconds has elapsed, the function that determines if no button is selected will be executed.
            setTimeout(function () {
                if (!($("#form-id input").is(':checked')) && allowedTime === 0) {
                    stop();
                    console.log("Incorrect");
                    incorrectAnswer++
                    console.log("Current Score: " + userScore);
                    console.log("Incorrect Answers: " + incorrectAnswer)
                    $("#year-founded-answers").show()
                    $("#year-founded-correct").hide()
                    $("#year-founded-incorrect").hide()
                    $("#year-founded-timesup").show();
                }
            }, 1000 * 15.5);
            //If no answer is selected, this function will fire 10 seconds upon allowedTime running out, which is 25 seconds within the logic of $("#start-game").on("click"), hence 1000 * 25 on line 128
            setTimeout(function () {
                if (!($("#form-id input").is(':checked')) && allowedTime === 0) {
                    $("#year-founded-answers").hide()
                    $("#question-goes-here").html(allQuestions[1].question);
                    renderSecondQuestion();
                    $("#questions-form").show();
                    $("#form-id").hide();
                    $("#form-id2").show();
                    $("#form-id3").hide();
                    $("#form-id4").hide();
                    $("#form-id5").hide();
                    allowedTime = 15
                    run();
                    decrement();                   
                }
            }, 1000 * 18)
        });
    




//Question 1: When an answer is selected
        $('#form-id input').on('change', function firstQuestion () {
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
                    setTimeout(function() {
                        $("#year-founded-answers").hide()
                        $("#question-goes-here").html(allQuestions[1].question);
                        renderSecondQuestion();
                        $("#questions-form").show();
                        $("#form-id").hide();
                        $("#form-id2").show();
                        $("#form-id3").hide();
                        $("#form-id4").hide();
                        $("#form-id5").hide();
                        allowedTime = 15;
                        run();
                        decrement();
                    }, 1000 * 3);
                } else if (userAnswer !== allQuestions[0].correctAnswer && allowedTime >= 0) {
                    stop();
                    console.log("Incorrect");
                    incorrectAnswer++
                    console.log("Current Score: " + userScore);
                    console.log("Incorrect Answers: " + incorrectAnswer)
                    $("#year-founded-answers").show()
                    $("#year-founded-correct").hide()
                    $("#year-founded-incorrect").show()
                    $("#year-founded-timesup").hide();
                    setTimeout(function() {
                        $("#year-founded-answers").hide()
                        $("#question-goes-here").html(allQuestions[1].question);
                        renderSecondQuestion();
                        $("#questions-form").show();
                        $("#form-id").hide();
                        $("#form-id2").show();
                        $("#form-id3").hide();
                        $("#form-id4").hide();
                        $("#form-id5").hide();
                        allowedTime = 15;
                        run();
                        decrement();
                    }, 1000 * 3);
                }
        });



//Question 2 - When an answer is selected
    $('#form-id2 input').on("change", function secondQuestion () {
        var userAnswer = ($("input[name=answerChoices2]:checked", "#form-id2").val());
        console.log(userAnswer);
            if (userAnswer === allQuestions[1].correctAnswer && allowedTime >= 0) {
                stop();
                console.log("correct");
                userScore++;
                console.log("Current Score: " + userScore);
                $("#stanley-cups-answers").show();
                $("#stanley-cups-correct").show();
                $("#stanley-cups-incorrect").hide();
                $("#stanley-cups-timesup").hide()
                setTimeout(function() {
                    $("#stanley-cups-answers").hide()
                    $("#question-goes-here").html(allQuestions[2].question);
                    renderThirdQuestion();
                    $("#questions-form").show();
                    $("#form-id").hide();
                    $("#form-id2").hide();
                    $("#form-id3").show();
                    $("#form-id4").hide();
                    $("#form-id5").hide();
                    allowedTime = 15
                    run();
                    decrement();
                }, 1000 * 3);
            } else if (userAnswer !== allQuestions[1].correctAnswer && allowedTime >= 0) {
                stop();
                console.log("Incorrect");
                incorrectAnswer++
                console.log("Current Score: " + userScore);
                console.log("Incorrect Answers: " + incorrectAnswer)
                $("#stanley-cups-answers").show()
                $("#stanley-cups-correct").hide()
                $("#stanley-cups-incorrect").show()
                $("#stanley-cups-timesup").hide();
                setTimeout(function() {
                    $("#stanley-cups-answers").hide()
                    $("#question-goes-here").html(allQuestions[2].question);
                    renderThirdQuestion();
                    $("#questions-form").show();
                    $("#form-id").hide();
                    $("#form-id2").hide();
                    $("#form-id3").show();
                    $("#form-id4").hide();
                    $("#form-id5").hide();
                    allowedTime = 15;
                    run();
                    decrement();
                }, 1000 * 3);
            }
    });  
    
    



//Question 3 - When an answer is selected
    $('#form-id3 input').on("change", function thirdQuestion () {
        var userAnswer = ($("input[name=answerChoices3]:checked", "#form-id3").val());
        console.log(userAnswer);
            if (userAnswer === allQuestions[2].correctAnswer && allowedTime >= 0) {
                stop();
                console.log("correct");
                userScore++;
                console.log("Current Score: " + userScore);
                $("#willie-oree-answers").show();
                $("#willie-oree-correct").show();
                $("#willie-oree-incorrect").hide();
                $("#willie-oree-timesup").hide()
                setTimeout(function() {
                    $("#willie-oree-answers").hide()
                    $("#question-goes-here").html(allQuestions[3].question);
                    renderFourthQuestion();
                    $("#questions-form").show();
                    $("#form-id").hide();
                    $("#form-id2").hide();
                    $("#form-id3").hide();
                    $("#form-id4").show();
                    $("#form-id5").hide();
                    allowedTime = 15
                    run();
                    decrement();
                }, 1000 * 3);
            } else if (userAnswer !== allQuestions[2].correctAnswer && allowedTime >= 0) {
                stop();
                console.log("Incorrect");
                incorrectAnswer++
                console.log("Current Score: " + userScore);
                console.log("Incorrect Answers: " + incorrectAnswer)
                $("#willie-oree-answers").show()
                $("#willie-oree-correct").hide()
                $("#willie-oree-incorrect").show()
                $("#willie-oree-timesup").hide();
                setTimeout(function() {
                    $("#willie-oree-answers").hide()
                    $("#question-goes-here").html(allQuestions[3].question);
                    renderFourthQuestion();
                    $("#questions-form").show();
                    $("#form-id").hide();
                    $("#form-id2").hide();
                    $("#form-id3").hide();
                    $("#form-id4").show();
                    $("#form-id5").hide();
                    allowedTime = 15
                    run();
                    decrement();
                }, 1000 * 3);
            }
    }); 




//Question 4 - When an answer is selected
    $('#form-id4 input').on("change", function fourthQuestion () {
        var userAnswer = ($("input[name=answerChoices4]:checked", "#form-id4").val());
        console.log(userAnswer);
            if (userAnswer === allQuestions[3].correctAnswer && allowedTime >= 0) {
                stop();
                console.log("correct");
                userScore++;
                console.log("Current Score: " + userScore);
                $("#zdeno-chara-answers").show();
                $("#zdeno-chara-correct").show();
                $("#zdeno-chara-incorrect").hide();
                $("#zdeno-chara-timesup").hide()
                setTimeout(function() {
                    $("#zdeno-chara-answers").hide()
                    $("#question-goes-here").html(allQuestions[4].question);
                    renderFifthQuestion();
                    $("#questions-form").show();
                    $("#form-id").hide();
                    $("#form-id2").hide();
                    $("#form-id3").hide();
                    $("#form-id4").hide();
                    $("#form-id5").show();
                    allowedTime = 15
                    run();
                    decrement();
                }, 1000 * 3);
            } else if (userAnswer !== allQuestions[3].correctAnswer && allowedTime >= 0) {
                stop();
                console.log("Incorrect");
                incorrectAnswer++
                console.log("Current Score: " + userScore);
                console.log("Incorrect Answers: " + incorrectAnswer)
                $("#zdeno-chara-answers").show()
                $("#zdeno-chara-correct").hide()
                $("#zdeno-chara-incorrect").show()
                $("#zdeno-chara-timesup").hide();
                setTimeout(function() {
                    $("#willie-oree-answers").hide()
                    $("#question-goes-here").html(allQuestions[4].question);
                    renderFifthQuestion();
                    $("#questions-form").show();
                    $("#form-id").hide();
                    $("#form-id2").hide();
                    $("#form-id3").hide();
                    $("#form-id4").hide();
                    $("#form-id5").show();
                    allowedTime = 15
                    run();
                    decrement();
                }, 1000 * 3);
            }
    }); 
})
