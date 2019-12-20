var questions = [
    {
        title: "Which of these is not one of the 3 building blocks of the web?",
        choices: ["Linux", "HTML", "Javascript", "CSS"],
        answer: "Linux"
    },
    {
        title: "In Jquery what does $ represent",
        choices: ["A String", "An Object", "A Function", "None of the Above"],
        answer: "A Function"
    },
    {
        title:"What word refers to Javascripts tendency to read line by line in order?",
        choices: ["Asynchronous", "Synchronous", "Ordered", "Scripted"],
        answer: "Synchronous"
    },
    {
        title: "What is Debugging",
        choices: ["Calling An Exterminator", "Untapping a Phone Line", "A Dance", "Reviewing Your Code fo Errors"],
        answer: "Reviewing Your Code fo Errors"
    },
    {
        title: "What does # refer to when calling on elements?",
        choices: ["a Div's ID", "A Div's class", "A Div's Value", "None of the Above"],
        answer: "a Div's ID"
    }




    // more questions here
];


function create(element, place, text, elClass) {
    var createEl = document.createElement(element);
    createEl.textContent = text;
    createEl.className = elClass;
    var target = document.getElementById(place);
    target.appendChild(createEl);
    }

function removePrev() {
    var prevAns = document.querySelectorAll("#buttons");
    while (prevAns[0].hasChildNodes()) {
        prevAns[0].removeChild(prevAns[0].firstChild);
    }
}

function clrResult() {
    setUp = setTimeout(clrPrev, 2000)
}

function clrPrev() {
    var PrevResult = document.querySelector("#result");
    PrevResult.removeChild(PrevResult.firstChild);
}

function correct() {
    create("h2", "result", "Correct", "correct result");
}

function incorrect() {
    create("h2", "result", "Incorrect", "incorrect result");
    secondsLeft-= 15;
}



function startPage(){
    create("h1", "main", "Coding Quiz Challenge", "startHead");
    create("p", "main", "Welcome to the coding quiz challenge click the button below to begin. The object is to finish with as much time remaining as possible while avoiding penalties for wrong answers", "startText");
    create("button", "main", "Start The Quiz", "startBtn");
}

function startClick() {
    var ques1El = document.querySelector(".startHead");
    var textEl = document.querySelector(".startText");
    var btn1 = document.querySelector(".startBtn");
    ques1El.textContent = questions[0].title;
    textEl.textContent = "";
    btn1.style.display = "none";
    setTime();
    question1();      
}

function question1() {
    for (var i = 0; i < questions[0].choices.length; i++) {
        create("button", "buttons", questions[0].choices[i], "q1as button");           
}   

var ansBtn1 = document.querySelectorAll(".button");
    ansBtn1[0].addEventListener("click", q1check);
    ansBtn1[1].addEventListener("click", q1check);
    ansBtn1[2].addEventListener("click", q1check);
    ansBtn1[3].addEventListener("click", q1check);
}
function q1check () {
    event.stopPropagation();
    var ans1 = questions[0].answer;
    var userAns1 = event.target.textContent;
        if (userAns1 === ans1) {
            correct();
           question2();     
        }
        else {
            incorrect();
            question2();
        }
}

function question2() {
    var ques2El = document.querySelector(".startHead");
    ques2El.textContent = questions[1].title;
    removePrev();
    clrResult();
    for (var i = 0; i < questions[1].choices.length; i++) {
        create("button", "buttons", questions[1].choices[i], "q2as button");          
}

var ansBtn2 = document.querySelectorAll(".button");
ansBtn2[0].addEventListener("click", q2check);
ansBtn2[1].addEventListener("click", q2check);
ansBtn2[2].addEventListener("click", q2check);
ansBtn2[3].addEventListener("click", q2check);

}

function q2check() {
    event.stopPropagation();
    var ans2 = questions[1].answer;
    var userAns = event.target.textContent;
    if (userAns === ans2) {
        correct();
        question3();
    }
    else {
        incorrect();
        question3();
    }
}
function question3() {
    var ques3El = document.querySelector(".startHead");
    ques3El.textContent = questions[2].title;
    removePrev();
    clrResult();
    for (var i = 0; i < questions[2].choices.length; i++) {
        create("button", "buttons", questions[2].choices[i], "q3as button");
    }
    var ansBtn3 = document.querySelectorAll(".button");
    ansBtn3[0].addEventListener("click", q3check);
    ansBtn3[1].addEventListener("click", q3check);
    ansBtn3[2].addEventListener("click", q3check);
    ansBtn3[3].addEventListener("click", q3check);
}
function q3check() {
    event.stopPropagation();
    var ans3 = questions[2].answer;
    var userAns = event.target.textContent;
    if (userAns === ans3) {
        correct();
        question4();
    }
    else {
        incorrect();
        question4();
    }
}

function question4() {
    var ques4El = document.querySelector(".startHead");
    ques4El.textContent = questions[3].title;
    removePrev();
    clrResult();
    for (var i = 0; i < questions[3].choices.length; i++) {
        create("button", "buttons", questions[3].choices[i], "q4as button");
    }
    var ansBtn4 = document.querySelectorAll(".button");
    ansBtn4[0].addEventListener("click", q4check);
    ansBtn4[1].addEventListener("click", q4check);
    ansBtn4[2].addEventListener("click", q4check);
    ansBtn4[3].addEventListener("click", q4check);
}
function q4check() {
    event.stopPropagation();
    var ans4 = questions[3].answer;
    var userAns = event.target.textContent;
    if (userAns === ans4) {
        correct();
        question5();
    }
    else {
        incorrect();
        question5();
    }
}
function question5() {
    var ques5El = document.querySelector(".startHead");
    ques5El.textContent = questions[4].title;
    removePrev();
    clrResult();
    for (var i = 0; i < questions[4].choices.length; i++) {
        create("button", "buttons", questions[4].choices[i], "q5as button");
    }
    var ansBtn5 = document.querySelectorAll(".button");
    ansBtn5[0].addEventListener("click", q5check);
    ansBtn5[1].addEventListener("click", q5check);
    ansBtn5[2].addEventListener("click", q5check);
    ansBtn5[3].addEventListener("click", q5check);
}
function q5check() {
    event.stopPropagation();
    var ans5 = questions[4].answer;
    var userAns = event.target.textContent;
    if (userAns === ans5) {
        correct();
        finalscore();
    }
    else {
        incorrect();
        finalscore();
    }
}
var josh = document.querySelectorAll("#test");
var secondsLeft = 75;

function setTime () {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        josh.textContent = "Time: " + secondsLeft;
        // var josh2 = josh.textContent;
        // josh2.append("test" + secondsLeft)
        // josh.append(josh2);
        // console.log(josh.textContent);
        document.querySelector("#test").textContent= "";
        document.querySelector("#test").append(josh.textContent);
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
          }
    }, 1000)
}
function finalscore() {
    removePrev();
    document.querySelector("#result").textContent = "";
    // document.querySelector("#main").textContent = "High Scores"
    var initials = prompt("Enter Your Initials")
    localStorage.setItem("HighScore", [initials, secondsLeft]);
    document.querySelector("#main").textContent = "High Score: " + JSON.stringify(localStorage.HighScore);
}
// console.log(josh.textContent);
// setTime();
// console.log(timeEl);
// console.log(document.querySelector("#test"));