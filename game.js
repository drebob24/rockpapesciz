/* Ask for a user insput
Generate computer choice
Compare User vs Computer
Return Win/Lose */

let compChoice = getRandomInt();
let computerSelection = getComputerChoice();

function getComputerChoice(){
    compChoice = getRandomInt();
    console.log(compChoice);
    if (compChoice === 0) {
        return "Rock";
    }
    else if (compChoice === 1) {
        return "Paper";
    }
    else 
        return "Scissors";
}

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

let playerSelection = "";


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    
    if (playerSelection === "rock"){
        if (computerSelection === "Paper"){
            return "You Lose! Paper beats Rock.";
        }
        else if (computerSelection === "Scissors"){
            return "You Win! Rock beats Scissors";
        }
        else
            return "Draw! Stuck between a Rock and, well, another Rock";

    }
    else if (playerSelection === "paper"){
        if (computerSelection === "Scissors"){
            return "You Lose! Scissors beats Paper.";
        }
        else if (computerSelection === "Rock"){
            return "You Win! Paper beats Rock";
        }
        else
            return "Draw! Ouch, papercut.";
        
    }
    else if (playerSelection === "scissors"){
        if (computerSelection === "Rock"){
            return "You Lose! Rock beats Scissors.";
        }
        else if (computerSelection === "Paper"){
            return "You Win! Scissors beats Paper";
        }
        else
            return "Draw! Neither of you is the sharpest scissor in the drawer.";
        
    }
    else
        return "Please choose Rock, Paper, or Scissors";


}