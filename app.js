const progreesBar = document.querySelector(".progres-bar"),
progreesText = document.querySelector(".progres-text");

const progres = (value) =>{
        const percentage = (value / time) * 100;
        progreesBar = '${percentage} %';
        progreesText.innerHTML = '${value}';
};

let question = [],
    score = 0,
    time = 30,
    currentQuestion,
    timer;

const startBtn = document.querySelector(".start"),
numQuestion = document.querySelector("#numQuestion"),
category = document.querySelector("#category"),
difficulty = document.querySelector("#difficulty"),
timePerQuestion = document.querySelector("#time"),
quiz = document.querySelector(".time"),
startscreen= document.querySelector(".start-screen");

const startQuiz = () =>{
    const num = numQuestion.value;
    const cat = category.value;
    const diff = difficulty.value;
    const time = timePerQuestion.value;
    const url = 'https://opentdb.com/api.php?amount=${num}&category=${cat}&difficulty=${diff}&type=multiple';

    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        questions = data.results;
        console.log(questions);

        });
};

startBtn.addEventListener("click" , startQuiz);