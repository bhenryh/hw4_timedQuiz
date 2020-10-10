// var startPage = document.getElementById("startPage");
var qstnField = document.getElementById("qstnField");
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var answers = document.getElementById("answers");
var results = document.getElementById("results");
var nameInitials = document.getElementById("nameInitials");
var initials = document.getElementById("initials");
var submitBtn = document.getElementById("submitBtn");
var scores = document.getElementById("scoresThang");
var questions = [
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

var Q = 0

startBtn.addEventListener("click", startGame);
// submitBtn.addEventListener("click", storeInitial);

function startGame() {
    var startScreen = document.getElementById("startPage");
    startScreen.setAttribute("class", "hide");
    qstnField.removeAttribute("class", "hide");
    buildQuestion();

    timerID = setInterval(runClock, 1000);
}

function buildQuestion() {
    var questionEl = document.getElementById("question");
    var answersEl = document.getElementById("answers");

    questionEl.textContent = questionArray[Q].question;

    answersEl.innerHTML = "";

    questionArray[Q].choices.array.forEach(function (choice) {
        var button = document.createElement("button");
        button.setAttribute("value", choice);

        button.textContent = choice;
        button.setAttribute("class", "btn");

        button.onclick = selectAnswer;

        answersEl.appendChild(button);
    });
}

function selectAnswer() {
    console.log(this.value);

    if (this.value !== questionArray[Q].answer) {
        console.log("wrong");
        time -= 10;
        this.classList.add("wrong");
        console.log(this);

    } else {
        this.classlist.add("correct");
        console.log("correct");
        time += 10;
        score++
    }
    Q++;
    if (Q === questionArray.length) {
        setTimeout(endGame, 500);
    } else {
        setTimeout(buildQuestion, 500);
    }
}

function endGame() {
    qstnField.setAttribute("class", "hide");
    clearInterval(timerID);
    results.classlist.remove("hide");
}

function runClock() {
    time--;
    var timer = document.getElementById("timer");
    timer.textContent = time;
    console.log(time);

    if (time <= 0) {
        setTimeout(endGame, 500);
    }
}

function storeInitials(e) {
    e.preventDefault();
    var initStart = intitFinish.value;
    console.log(initStart);
    console.log(score);

}



// var questionEl = document.querySelector(".question")
// var answerEl = document.querySelector(".answer")

// var Quiz = [{question}]



// //click
// answerEl.addEventListener("click", function(e)({ e.preventDefault();
//     var target1 = e.target;



// }