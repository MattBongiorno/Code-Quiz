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
const highScoreCard = document.getElementById('highScoreCard');
// Quiz questions in an object array.
const quizQuestions = [