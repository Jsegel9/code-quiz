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

// function correct() {
//     create("h2", "result", "Correct", "correct result");
// }

// function incorrect() {
//     create("h2", "result", "Incorrect", "incorrect result");
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
    // var ans1 = questions[0].answer;
    ques1El.textContent = questions[0].title;
    textEl.textContent = "";
    btn1.style.display = "none";
    question1();   
    
    //     for (var i = 0; i < questions[0].choices.length; i++) {
    //         create("button", "buttons", questions[0].choices[i], "q1as button");
    //         // var ansBtn1 = document.querySelectorAll("#buttons")[0];
    //         // var ansBtn = document.querySelectorAll(".q1as");
    //         // console.log(ansBtn1.childNodes[i]);
    //         // console.log(ansBtn);            
    // }
    // // var ansBtn1 = document.querySelectorAll("#buttons")[0];
    // var ansBtn3 = document.querySelectorAll(".button");
    // // console.log(ansBtn3);
    // // console.log(ansBtn3[0]);
    // // console.log(ansBtn3[1]);
    // ansBtn3[0].addEventListener("click", function () {
    //     var userAns1 = event.target.textContent;
    //     console.log(userAns1);
    //     console.log(event.target.textContent)
    //     // console.log(event.target.className);
    //     if (userAns1 === ans1) {
    //         create("h2", "result", "Correct", "correct result");
    //        question2();     
    //     }
    //     // else if (event.target.className === "buttonarea") {
    //     //     create("h2", "result", "test", "result")
    //     // }
    //     else {
    //         create("h2", "result", "Incorrect", "incorrect result");
    //         question2();
    //     }
    //     // console.log(userAns);
    //     // console.log(ans1);
    // })  
    
}
function question1() {
    // var ans1 = questions[0].answer;
 
    for (var i = 0; i < questions[0].choices.length; i++) {
        create("button", "buttons", questions[0].choices[i], "q1as button");
        // var ansBtn1 = document.querySelectorAll("#buttons")[0];
        // var ansBtn = document.querySelectorAll(".q1as");
        // console.log(ansBtn1.childNodes[i]);
        // console.log(ansBtn);            
}   
// var ansBtn1 = document.querySelectorAll("#buttons")[0];
var ansBtn3 = document.querySelectorAll(".button");
// console.log(ansBtn3);
// console.log(ansBtn3[0]);
// console.log(ansBtn3[1]);

    ansBtn3[0].addEventListener("click", q1check);
// ansBtn3[0].addEventListener("click", function () {
//     var userAns1 = event.target.textContent;
//     console.log(userAns1);
//     console.log(event.target.textContent)
//     // console.log(event.target.className);
//     if (userAns1 === ans1) {
//         create("h2", "result", "Correct", "correct result");
//        question2();     
//     }
//     // else if (event.target.className === "buttonarea") {
//     //     create("h2", "result", "test", "result")
//     // }
//     else {
//         create("h2", "result", "Incorrect", "incorrect result");
//         question2();
//     }
    // console.log(userAns);
    // console.log(ans1);
// })  

}
function q1check () {
    var ans1 = questions[0].answer;
    var userAns1 = event.target.textContent;
        // console.log(userAns1);
        // console.log(event.target.textContent)
        // console.log(event.target.className);
        if (userAns1 === ans1) {
            create("h2", "result", "Correct", "correct result");
           question2();     
        }
        // else if (event.target.className === "buttonarea") {
        //     create("h2", "result", "test", "result")
        // }
        else {
            create("h2", "result", "Incorrect", "incorrect result");
            question2();
        }
}

function question2() {

    var ques2El = document.querySelector(".startHead");
    // var ans2 = questions[1].answer;
    ques2El.textContent = questions[1].title;
    
    removePrev();
    clrResult();

    for (var i = 0; i < questions[1].choices.length; i++) {
        create("button", "buttons", questions[1].choices[i], "q2as button");
        // var ansBtn2 = document.querySelectorAll("#buttons")[0];
        // console.log(ansBtn2);            
}
var ansBtn2 = document.querySelectorAll("#buttons")[0];
ansBtn2.addEventListener("click", q2check);
//     // console.log(event.target.textContent);
//     var userAns = event.target.textContent;
//     // console.log(userAns);
//     if (userAns === ans2) {
//         correct();
//     }
//     else if (event.target.className === "buttonarea") {
//         create("h2", "result", "test", "result")
//     }
//     else {
//         incorrect();
//     }
// })

}
function q2check() {
    var ans2 = questions[1].answer;
    var userAns = event.target.textContent;
    // console.log(userAns);
    if (userAns === ans2) {
        // correct();
        create("h2", "result", "Correct", "correct result");
    }
    else {
        // incorrect();
        create("h2", "result", "Incorrect", "incorrect result");
    }
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