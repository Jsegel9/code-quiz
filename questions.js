var questions = [
    {
        title: "Question 1",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "Choice 1"
    },
    {
        title: "Question 2",
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        answer: "Answer 3"
    },




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
// function clrSetup() {
    // setUp = setTimeout(clrPrev, 2000)
// }


function startPage(){
    create("h1", "main", "Coding Quiz Challenge", "startHead");
    create("p", "main", "Welcome to the coding quiz challenge blah blah blah blah", "startText");
    create("button", "main", "Start The Quiz", "startBtn");
}

function startClick() {
    var ques1El = document.querySelector(".startHead");
    var textEl = document.querySelector(".startText");
    var btn1 = document.querySelector(".startBtn");
    var ans1 = questions[0].answer;
    ques1El.textContent = questions[0].title;
    textEl.textContent = "";
    btn1.style.display = "none";
       
    ;
        for (var i = 0; i < questions[0].choices.length; i++) {
            create("button", "buttons", questions[0].choices[i], "q1as button");
            var ansBtn = document.querySelectorAll("#buttons")[0];            
    }
    ansBtn.addEventListener("click", function () {
        var userAns = event.target.textContent;
        if (userAns === ans1) {
           create("h2", "result", "Correct", "correct result");
           question2();     
        }
        else {
            create("h2", "result", "Incorrect", "incorrect result");
            question2();
        }
        // console.log(userAns);
        // console.log(ans1);
    })  
    
}

function question2() {
    var ques2El = document.querySelector(".startHead");
    ques2El.textContent = questions[1].title;
    
    removePrev();
    clrResult();
}


// function checkAnswer(event) {
//     var userAns = event.target.textContent;
//     var ans1 = questions[0].answer;
//     //add other variables for other answers
//     if ()

//     console.log(userAns);
//     console.log(ans1);
    // console.log(event.target.textContent);
// }
// function myfunction() {
    // console.log("test");
// }
// console.log(ansBtn);