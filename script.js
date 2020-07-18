// element hooks
const timerDisplay = document.getElementById('timeLeft');
const startQuizButton = document.getElementById('startQuizButton');
const questionTitle = document.getElementById('questionTitle');
const answerButton1 = document.getElementById('1');
const answerButton2 = document.getElementById('2');
const answerButton3 = document.getElementById('3');
const answerButton4 = document.getElementById('4');
const submissionFeedback = document.getElementById('submissionFeedback');
// create high scores
const highScoreList = document.getElementById('highScoreList');
let highScores = [];
const introCard = document.getElementById('introCard');
const questionCard = document.getElementById('questionCard');
const enterScoreCard = document.getElementById('enterScoreCard');
const highScoreCard = document.getElementById('highScoreCard'); // Quiz questions in an object array sourced from several websites.
const quizQuestions = [{
        questionTitle: "Which of these values qualifies as a string?",
        answer1: "string? my cat loves string",
        answer2: "42",
        answer3: "true",
        answer4: "false",
        correctAnswer: "1"
    },
    {
        questionTitle: "What is the HTML tag under which one can write the JavaScript code?",
        answer1: "<javascript>",
        answer2: "<scripted>",
        answer3: "<script>",
        answer4: "<js>",
        correctAnswer: "3"
    },
    {
        questionTitle: "Which of the following is the correct syntax to display 'Party Time!' in an alert box using JavaScript?",
        answer1: "alertbox('Party Time!')",
        answer2: "msg('Party Time!')",
        answer3: "msgbox('Party Time!')",
        answer4: "alert('Party Time!')",
        correctAnswer: "4"
    },
    {
        questionTitle: "How would you print a string to the console?",
        answer1: "print ('like this')",
        answer2: "console.log('like this')",
        answer3: "console.print('no,like this')",
        answer4: "print.log('this could work?')",
        correctAnswer: "2"
    },
    {
        questionTitle: "What is the correct syntax for referring to an external script called 'script.js'?",
        answer1: "<script src='script.js'>",
        answer2: "<script href='script.js'>",
        answer3: "<script ref='script.js'>",
        answer4: "<script name='script.js'>",
        correctAnswer: "1"
    },
    {
        questionTitle: "What is the method in JavaScript used to remove the whitespace at the beginning and end of any string?",
        answer1: "trimmed()",
        answer2: "trim()",
        answer3: "strip()",
        answer4: "stripped()",
        correctAnswer: "2"
    },
    {
        questionTitle: "Which of the following is not a reserved word in JavaScript?",
        answer1: "interface",
        answer2: "throws",
        answer3: "program",
        answer4: "short",
        correctAnswer: "3"
    },
    {
        questionTitle: "What is the syntax for creating a function in JavaScript named as Newfunction?",
        answer1: "function = Newfunction()",
        answer2: "function Newfunction()",
        answer3: "function:= Newfunction()",
        answer4: "function : Newfunction()",
        correctAnswer: "2"
    }
]