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
let quizTimeRemaining = 60;
let currentQuestionCount = 0;
let score = 0;
let finalScore = 0;
// Timer function
function quizTimer() {
    if ((currentQuestionCount < (quizQuestions.length) && quizTimeRemaining > 0)) {
        quizTimeRemaining--;
        timerDisplay.textContent = quizTimeRemaining;
    } else {
        timerDisplay.textContent = quizTimeRemaining;
        clearTimeout();
        questionCard.classList.add('d-none');
        if (highScoreCard.classList.contains('d-none')) {
            enterScoreCard.classList.remove('d-none');
        }
        if (score === 0) {
            quizTimeRemaining = 0;
            timerDisplay.textContent = quizTimeRemaining;
        }
        finalScore = score + quizTimeRemaining;
        document.getElementById('finalScoreSpan').textContent = finalScore;
    }
}
// high score function
function populateHighScore() {
    highScores = JSON.parse(localStorage.getItem('highScores'));
    // Add compare and sort function
    function compare(a, b) {
        const scoreA = parseInt(a.score);
        const scoreB = parseInt(b.score);
        let comparison = 0;
        if (scoreA > scoreB) {
            comparison = 1;
        } else if (scoreA < scoreB) {
            comparison = -1;
        } else {
            comparison = 0;
        }
        return comparison * -1;
    };
    highScores.sort(compare);
    for (i = 0; i < highScores.length; i++) {
        const li = document.createElement("li");
        li.textContent = `${highScores[i].initials}: ${highScores[i].score}`
        highScoreList.appendChild(li);
    }
}
// Function that modifies the quiz contet and question counter.
function questionModifier(i) {
    if ((quizTimeRemaining > 0) && currentQuestionCount < quizQuestions.length) {
        questionTitle.innerText = quizQuestions[i].questionTitle;
        answerButton1.innerText = quizQuestions[i].answer1;
        answerButton2.innerText = quizQuestions[i].answer2;
        answerButton3.innerText = quizQuestions[i].answer3;
        answerButton4.innerText = quizQuestions[i].answer4;
    } else {
        return;
    }
}

function answerQuestion(event) {
    event.preventDefault();
    let i = currentQuestionCount;
    const targetButton = event.target.classList.contains('answerButton');
    if (targetButton) {
        const targetAnswerID = event.target.id;
        if (targetAnswerID === quizQuestions[i].correctAnswer) {
            // This function executes for correct answers.
            score++;
            currentQuestionCount++;
            questionModifier(currentQuestionCount);
            // feedback text to HTML
            if (submissionFeedback.classList.contains('d-none')) {
                submissionFeedback.classList.remove('d-none');
                submissionFeedback.textContent = "Correct!";
            } else {
                submissionFeedback.textContent = "Correct!";
            }
        } else if (targetAnswerID !== quizQuestions[i].correctAnswer) {
            // This function executes for incorrect answers.
            currentQuestionCount++;
            questionModifier(currentQuestionCount);
            // Add answer feedback text to HTML
            if (submissionFeedback.classList.contains('d-none')) {
                submissionFeedback.classList.remove('d-none');
                submissionFeedback.textContent = "Incorrect";
            } else {
                submissionFeedback.textContent = "Incorrect";
            }
            // subtract time from quiz timer
            quizTimeRemaining = quizTimeRemaining - 10;
        }
    } else {
        // This executes for non button clicks.
        return
    }
}