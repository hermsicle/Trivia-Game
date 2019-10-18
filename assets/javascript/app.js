$(document).ready(function () {

    //When start button is clicked, it shows the hidden questionaire
    $('#start').on('click', function () {
        $('.startBtn').hide(); //Or could use $(this).hide()
        $('#quiz').show();
    })
    //Set our number counter to 60.
    var number = 60;
    //variable that will hold our intervalID when we execute 
    //the 'run' function
    var intervalId;
    //The run function is setting an interval
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    //The decrement function
    function decrement() {
        number--; //this is decrementing the number var by 1
        //show the number being decremented in html
        $('#counter').html("<h2> Time Remaining: " + number + "<h2>");
        //Once the number hits zero....
        if (number === 0) {
            $('#end-page').show();
            // run the 'stop' function, or in this case, run the function where takes us to the
            //number of questions answered right, wrong, and unanswered.
            stop();
        }
    }
    //Here we put the 'stop' function:
    function stop() {

        //Clears our intervalId
        //We pass the name of the interval to the clearInterval function
        clearInterval(intervalId);
    }
    run();


    //Creating Questions
    var webQuestions = [
        {
            question: 'What does HTML stand for?',
            answers: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'Blue'],
            correct: 'Hyper Text Markup Language'
        },
        {
            question: "Choose the correct HTML tag for the largest heading:",
            answers: ['Head', 'H1', 'H6', 'Heading'],
            correct: 'H1'
        },
        {
            question: "What is the correct HTML tag for inserting a line break?",
            answers: ['break', 'br /br', 'lb', 'br/'],
            correct: 'br/'
        },
        {
            question: "Choose the correct HTML tag to make a text bold  ",
            answers: ['bold', 'b', 'bb', 'strong'],
            correct: 'bold'
        },
        {
            question: "What does CSS stand for?",
            answers: ['Creative Style Sheets', 'Colorful Style Sheets', 'Computing Style Sheets', 'Cascading Style Sheets'],
            correct: 'Cascading Style Sheets'
        },
        {
            question: "How do you insert a comment in a CSS file?",
            answers: ["'this is a comment", '/*This is a comment */', '//This is a comment', '//This is a comment. //'],
            correct: '/*This is a comment */'
        },
        {
            question: "How do you change the text color of an element?",
            answers: ['Color:', 'Text-Color:', 'Text-Color = ', 'Fgcolor:'],
            correct: 'Color:'
        },
        {
            question: "Who created Javascript?",
            answers: ['Microsoft', 'Sun Microsystems', 'Netscape', 'Oracle',],
            correct: 'Netscape'
        },
        {
            question: "What was Javascript called before it was ever called Javascript?",
            answers: ['Latte', 'Mocha', 'Livescript', 'BScript'],
            correct: 'Livescript'
        },
        {
            question: "What type of programming langauge is Javascript?",
            answers: ['Front End', 'Back End', 'Full-Stack', 'None',],
            correct: 'Full-Stack'
        },
    ];

    function trivia() {

    }
    var questionContainer = $('#Question');     //Assigning this var to the question Id.
    var answerGroup = $('#possibleAnswers');
    questionContainer.append('<h2>Answer the following Questions!</h2>')

    for (var i = 0; i < webQuestions.length; i++) {
        questionContainer.append('<div id="question">' + webQuestions[i].question + '</div>');

        var answer1 = webQuestions[i].answers[0];
        var answer2 = webQuestions[i].answers[1];
        var answer3 = webQuestions[i].answers[2];
        var answer4 = webQuestions[i].answers[3];

        //Creates the radio button.
        questionContainer.append('<div class ="form-check"><input class = "form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer1 + '</label></div>')
        questionContainer.append('<div class ="form-check"><input class = "form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer2 + '</label></div>')
        questionContainer.append('<div class ="form-check"><input class = "form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer3 + '</label></div>')
        questionContainer.append('<div class ="form-check"><input class = "form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer4 + '</label></div>')


        //$('#Question').append(`<h3> ${webQuestions[i].question}</h3>`, `<h5 >${webQuestions[i].answers} </h5>`)   //Shows all the questions and possible answers with no radio button
    }

    //add a done button at the end of the page 
    var doneBtn = '<button class=" btn btn-primary" id="done-button" type="submit">Done</button>';
    questionContainer.append(doneBtn);


    //function to check if questions are correct 
    function checkAnswers() {
        var correctAnswer;
        var userAnswer;
        var numIncorrect = 0;
        var numUnanswered = 0;
        var numCorrect = 0;

        //loop through the possible answers 
        //increment the scores
        for (var i = 0; i < webQuestions.length; i++) {
            correctAnswer = webQuestions[i].answers;
            userAnswer = $('input[id=radio' + i + ']:checked + label').text();
            if (userAnswer === correctAnswer) {
                numCorrect++;
            } else if (userAnswer === "") {
                numUnanswered++;
            } else if (userAnswer !== correctAnswer) {
                {
                    numIncorrect++;
                }
            }
            checkAnswers();
        }

        //show end page with correct, incorrect, and unanswered 
        function showEndPage() {
            $('#end-page').show();
            $('#Question').hide();
            $('#counter').empty();
            $('#counter').hide();
            $('#correctAnswer').append("Correct Answers: " + numCorrect);
            $('#wrongAnswer').append("Incorrect Answers: " + numIncorrect);
            $('#unAnswered').append("Unanswered Questions: " + numUnanswered);
        }
        showEndPage();
    }

})

