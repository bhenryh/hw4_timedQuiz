var startPage = document.getElementById("startPage");
var qstnField = document.getElementById("qstnField");
var timer = document.getElementById("timer");
// var question = document.getElementById("question");
// var answers = document.getElementById("answers");
var results = document.getElementById("results");
var nameInitials = document.getElementById("nameInitials");
var initials = document.getElementById("initials");
var submitBtn = document.getElementById("submitBtn");
var scores = document.getElementById("scoresThang");

var Q = 0;
var timerId;
var time = 60;
var score = 0;
var highScore = [];

var questionArray = [
    {
        title: "Commonly Used data types DO NOT include ______.",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts"
    },

    {
        title: "The condition of an if/else statement is enclosed within ______.",
        choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        answer: "3. parentheses"
    },

    {
        title: "Arrays in JavaScript can be used to store ______.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "4. all of the above"
    },

    {
        title: "String values must be enclosed within ______ when being assigned to variables.",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        answer: "3. quotes"
    },

    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is ______.",
        choices: ["1. JavaScipt", "2. terminal / bash", "3. for loops", "4. console.log"],
        answer: "4. console.log"
    }
]

startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", storeInitial);
restartBtn.addEventListener("click", restart);

function startQuiz() {
    startPage.setAttribute("class", "hide");
    qstnField.removeAttribute("class", "hide");
    buildQuestion();

    timerID = setInterval(runClock, 1000);
}

function buildQuestion() {
    var question = document.getElementById("question");
    var answers = document.getElementById("answers");

    question.textContent = questionArray[Q].title;

    answers.innerHTML = "";

    questionArray[Q].choices.forEach(function (choices) {
        var button = document.createElement("button");
        button.setAttribute("value", choices);

        button.textContent = choices;
        button.setAttribute("class", "btn");

        button.onclick = selectAnswer;

        answers.appendChild(button);
    });
}

function selectAnswer() {
    console.log(this.value);

    if (this.value !== questionArray[Q].answer) {
        // console.log("wrong");
        time -= 10;
        this.classList.add("wrong");
        // console.log(this);

    } else {
        this.classList.add("correct");
        console.log("correct");
        score++
    }
    Q++;
    if (Q === questionArray.length) {
        setTimeout(endQuiz, 750);
    } else {
        setTimeout(buildQuestion, 750);
    }
}

function endQuiz() {
    qstnField.setAttribute("class", "hide");
    clearInterval(timerID);
    results.classList.remove("hide");
}

function runClock() {
    time--;
    var timer = document.getElementById("timer");
    timer.textContent = time;

    if (time <= 0) {
        setTimeout(endQuiz, 750);
    }
}

function storeInitials(e) {
    e.preventDefault();
    var initls = initField.value.trim();
    // console.log(initStart);
    // console.log(score);

    var initObject = { initls, score };
    highScore.push(initObject);

    highScore.sort((a, b) => {
        return b.score - a.score;
    })

    localStorage.setItem("initObject", JSON.stringify(highScore));
    highScore = JSON.parse(localStorage.getItem(initObject));

    var output = "";
    for (var i = 0; i < highScore.length; i++) {
        output += highScore[i].initls + " " + highScore[i].score + "<br>";
    }
    scoreBoardDisplay.innerHTML = output;

    scoreBoard.classList.remove("hide");
    initialForm.classList.add("hide");
}