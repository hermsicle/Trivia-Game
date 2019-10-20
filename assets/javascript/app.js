$(document).ready(function () {

    //Start the game when the button is clicked

    $('.startBtn').on('click', gameStart.startTimer);
    
});


var gameStart = {

    timeRemaining: 60,

    startTimer: function () {
        $('#counter').text("Time Remaining: " + gameStart.timeRemaining);
        setInterval(gameStart.countdown, 1000);
        $('#start').hide();
        trivia.displayQuestions();
    },

    countdown: function () {
        gameStart.timeRemaining--;
        $('#counter').text("Time Remaining: " + gameStart.timeRemaining);
        if (gameStart.timeRemaining === 0) {
            gameStart.stopTimer();
            $('#counter').empty();
        }
    },

    stopTimer: function () {
        clearInterval();
        trivia.checkAnswers();
    },

    showEndPage: function (numCorrect, numIncorrect, numUnanswered) {
        $('#end-page').show();
        $('#quiz').hide();
        $('#counter').empty();
        $('#counter').hide();
        $('#correctAnswer').append("Correct Answers: " + numCorrect);
        $('#wrongAnswer').append("Incorrect Answers: " + numIncorrect);
        $('#unAnswered').append("Unanswered Questions: " + numUnanswered);
    }
}

var trivia = {

    displayQuestions: function () {
        var questionContainer = $('#Question');
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
        }
        var doneBtn = '<button class=" btn btn-primary" id="done-button" type="submit">Done</button>';
        questionContainer.append(doneBtn);
        $('#dont-button').on('click', gameStart.stopTimer);
    },
    checkAnswers: function () {
        var correctAnswer;
        var userAnswer;
        var numIncorrect = 0;
        var numUnanswered = 0;
        var numCorrect = 0;

        for (var i = 0; i < webQuestions.length; i++) {
            correctAnswer = webQuestions[i].correct;
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
        }
        gameStart.showEndPage(numCorrect, numIncorrect, numUnanswered);
    },

}


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
    }
]