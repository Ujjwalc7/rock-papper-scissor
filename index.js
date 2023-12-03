// rock papper siccor project
const playerText=document.querySelector("#playerText");
const computerText=document.querySelector("#computerText");
const resultText=document.querySelector("#resultText");
const choiceBtns=document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;
choiceBtns.forEach(button=>button.addEventListener("click",()=>{
    player=button.textContent;
    computerTurn();
    playerText.textContent=`Player: ${player}`
    computerText.textContent=`Computer: ${computer}`
    resultText.textContent=checkWinner();
}))

function computerTurn(){
    const randomNumber=Math.floor(Math.random()*3)+1;
    switch (randomNumber) {
        case 1:
            computer="ROCK";
            break;
    case 2:
        computer= "PAPPER"; 
        break;
        case 3:
            computer= "SCISSORS";
            break;
        default:
            break;
    }
}

function checkWinner(){
    if(player==computer){
        return "draw"
    }else if(computer=="ROCK"){
        return (player=="PAPPER")?"you win": "you loose";
    }
    else if(computer=="PAPPER"){
        return (player=="SCISSORS")?"you win": "you loose";
    }
    else if(computer=="SCISSORS"){
        return (player=="ROCK")?"you win": "you loose";
    }
}