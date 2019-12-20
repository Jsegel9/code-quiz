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

// function create2(element, place, text, elClass) {
//     var createEl = document.createElement(element);
//     createEl.textContent = text;
//     createEl.className = elClass;
//     var target = document.getElementById(place);
//     target.appendChild(createEl);
// }

function startPage(){
    create("h1", "main", "Coding Quiz Challenge", "startHead");
    create("p", "main", "Welcome to the coding quiz challenge blah blah blah blah", "startText");
    create("button", "buttons", "Start The Quiz", "startBtn");
}

function startClick() {
    var ques1El = document.querySelector(".startHead");
    var textEl = document.querySelector(".startText");
    var btn1 = document.querySelector(".startBtn");
    var ans1 = questions[0].answer;
    // var abc = document.querySelector(".q1as")
    ques1El.textContent = questions[0].title;
    textEl.textContent = "";
    btn1.style.display = "none";
    // console.log(ans1);
        for (var i = 0; i < questions[0].choices.length; i++) {
            // var ansBtn = document.querySelectorAll(".q1as");
            create("button", "buttons", questions[0].choices[i], "q1as button");
             var ansBtn = document.querySelectorAll(".q1as");
            //  console.log(ansBtn);
    }
    // var posAns = ansBtn;
    // console.log(posAns[0].textContent);

    // console.log(ansBtn[0].textContent);
    // console.log(ansBtn[0]);
    // ansBtn.onclick = myfunction;
    // ansBtn.addEventListener("click", myfunction);
    // console.log();
}
// function myfunction() {
    // console.log("test");
// }
// console.log(ansBtn);