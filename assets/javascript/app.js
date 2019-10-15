$(document).ready(function() {
//Creating all our elements
//Start the game when user clicks on start button
$('#start').on('click', gameState.startTimer)

});

//Information about Game State
var gameState = {
    
    //Setting the timer to 60 seconds when game starts
    
    timeRemaining: 60, 

    //Start the timer, hide the start page, and show questions
    startTimer: function() {
        $('#timer').text('Time Remaining: ' + gameState.timeRemaining);
        setInterval(gameState.countdown, 1000);
        $('#start').hide();
        trivia.displayQuestions();
    },

    //Decrement the timer and update the UI; stop the timer at 0;
    countdown: function() {
        gameState.timeRemaining--;
        $('#timer').text('Time Remaining: ' + gameState.timeRemaining);
        if (gameState.timeRemaining === 0) {
            gameState.stopTimer();
            $('#timer').empty();
        }
    },

    //Stop the timer and check the answers
    stopTimer: function() {
        clearInterval() ;
        trivia.checkAnswers() ;
    },

    //Hide the questions and display the end page with results



}






//Creating Questions
var questions = [
    {
        question: 'What does HTML stand for?',
        answers: ['Hyper Text Markup Language','Home Tool Markup Language','Hyperlinks and Text Markup Language','Blue'],
        correct: 'Hyper Text Markup Language'
    },
    {
        question: "Choose the correct HTML tag for the largest heading:",
        answers: ['Head','H1','H6','Heading'],
        correct: 'H1'
    },
    {
        question: "What is the correct HTML tag for inserting a line break?",
        answers: ['break','br /br','lb','br/'],
        correct: 'br/'
    },
    {
        question: "Choose the correct HTML tag to make a text bold  ",
        answers: ['bold','b','bb','strong'],
        correct: 'bold'
    },
    {
        question: "What does CSS stand for?",
        answers: ['Creative Style Sheets','Colorful Style Sheets','Computing Style Sheets','Cascading Style Sheets'],
        correct: 'Cascading Style Sheets'
    },
    {
        question: "How do you insert a comment in a CSS file?",
        answers: ["'this is a comment" ,'/*This is a comment */','//This is a comment','//This is a comment. //'],
        correct: '/*This is a comment */'
    },
    {
        question: "How do you change the text color of an element?",
        answers: ['Color:','Text-Color:','Text-Color = ','Fgcolor:'],
        correct: 'Color:'
    },
    {
        question: "Who created Javascript?",
        answers: ['Microsoft','Sun Microsystems','Netscape','Oracle' ,],
        correct: 'Netscape'
    },
    {
        question: "What was Javascript called before it was ever called Javascript?",
        answers: ['Latte','Mocha','Livescript','BScript'],
        correct: 'Livescript'
    },
    {
        question: "What type of programming langauge is Javascript?",
        answers: ['Front End','Back End','Full-Stack','None',],
        correct: 'Full-Stack'
    },
]



