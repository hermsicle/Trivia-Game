$(document).ready(function () {


    //When start button is clicked, it shows the hidden questionaire
    $('#start').on('click', function() {
        $('.startBtn').hide();
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
    var questions = [
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
    ]


});
