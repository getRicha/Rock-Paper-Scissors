let compScore = 0;
let userScore = 0;
const compScore_span = document.getElementById("comp-score");
const userScore_span = document.getElementById("user-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function getcomputerChoice(){
    const choices = ['r','p','s'];
    const random = Math.floor(Math.random()*3);
    return choices[random];
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice,compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(compChoice)}. You win 🔥`;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("green-glow") , 200);
}
function lose(userChoice,compChoice){
    compScore++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${convertToWord(compChoice)} beats ${convertToWord(userChoice)}. You lose 😿`;
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("red-glow") , 200);
}
function draw(userChoice,compChoice){
    result_div.innerHTML = `${convertToWord(userChoice)} ties ${convertToWord(compChoice)}. It's a draw.`;
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("gray-glow") , 200);
}

function game(userChoice){
    const compChoice = getcomputerChoice();
    switch(userChoice + compChoice){
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, compChoice);break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, compChoice);break;
        default: lose(userChoice, compChoice);
    }
}

function main(){
    rock.addEventListener('click',() => game("r"));
    paper.addEventListener('click',() => game("p"));
    scissors.addEventListener('click',() => game("s"));
}

main();