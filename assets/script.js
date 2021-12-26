// Questions
var quest = document.querySelector("#question-text");
var startButton = document.querySelector(".start-button");
var bio = document.querySelector("#bio");
var timeEl = document.querySelector(".time");
var options = document.querySelector(".options");
var buttonA = document.querySelector("#a");
var buttonB = document.querySelector("#b");
var buttonC = document.querySelector("#c");
var buttonD = document.querySelector("#d");
var scoreDisplay = document.querySelector("score");

var questions = [
  {
    question: "How many data types are there in Javascript?",
    options: {
      a: "2",
      b: "9",
      c: "7",
      d: "6"
      },
      correctOption: "c"
  },
  
  {
    question: "Commonly used data types DO NOT include:",
    options: {
      a: "numbers",
      b: "boolean",
      c: "alerts",
      d: "strings",
      },
      correctOption: "b"
  },
  
  {
    question: "Arrays in Javascript can be used to store____",
    options: {
      a: "numbers and strings",
      b: "other arrays",
      c: "booleans",
      d: "All the above",
      },
      correctOption: "d"
  },
  
  {
    question: "Which comparison operator is for strict equality?",
    options: {
      a: "<=",
      b: "===",
      c: "!=",
      d: "++",
      },
      correctOption: "b"
  },
  
  {
    question: "The condition in an if/else statement is enclosed with___",
    options: {
      a: "curly brackets",
      b: "quotes",
      c: "onion rings",
      d: "parentheses",
      },
      correctOption: "d"
   },
];
  
var secondsLeft = 60;

var questionIndex = 0;

var score = 0;

var displayQuestion = function() {
    quest.textContent = questions[questionIndex].question
    buttonA.textContent = questions[questionIndex].options.a
    buttonB.textContent = questions[questionIndex].options.b
    buttonC.textContent = questions[questionIndex].options.c
    buttonD.textContent = questions[questionIndex].options.d
  }

  function startGame() {
    displayQuestion();
  
    startButton.setAttribute("hidden", true);
    bio.setAttribute("hidden", true);
    options.style="display:block"
  
    startTimer();
  }

  // get button ???? start function 
function next (event) {

    var element = event.target;
  
    if (element.matches(".button-choice")) {
      var choice = element.id
    }
  
    if (choice === questions[questionIndex].correctOption) {
      score++;
      questionIndex++;
      displayQuestion();
  
    } else {
      secondsLeft -= 10;
      questionIndex++;
      displayQuestion();
    }
  
  
    if (questionIndex === questions.length) {
      endGame();
    }
  }

  function endGame () {
    options.style="display:none"
  }

  function startTimer() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
        endGame();
      }
  
    }, 1000);
  }

  // Function to create and append colorsplosion image
function sendMessage() {
    timeEl.textContent = "GAME OVER";
  
  }
  
  startButton.addEventListener("click", startGame);
  
  options.addEventListener("click", next);



