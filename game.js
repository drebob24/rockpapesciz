let playerWins = 0;
let computerWins = 0;
let drawCount = 0;
let computerSelection = "";

const results = document.querySelector(".results");
const compChoice = document.createElement('p');
const roundResult = document.createElement('p');
const tally = document.createElement('p');
const victory = document.createElement('p');

function getComputerChoice(){
    let compChoice = getRandomInt();
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

function playRound(playerSelection){
    computerSelection = getComputerChoice();
    if (playerSelection === "rock"){
        if (computerSelection === "Paper"){
            computerWins++;
            return "You Lose! Paper beats Rock.";
        }
        else if (computerSelection === "Scissors"){
            playerWins++;
            return "You Win! Rock beats Scissors";
        }
        else
            drawCount++;
            return "Draw! Go Again.";

    }
    else if (playerSelection === "paper"){
        if (computerSelection === "Scissors"){
            computerWins++;
            return "You Lose! Scissors beats Paper.";
        }
        else if (computerSelection === "Rock"){
            playerWins++;
            return "You Win! Paper beats Rock";
        }
        else
            drawCount++;
            return "Draw! Go Again.";
        
    }
    else if (playerSelection === "scissors"){
        if (computerSelection === "Rock"){
            computerWins++;
            return "You Lose! Rock beats Scissors.";
        }
        else if (computerSelection === "Paper"){
            playerWins++;
            return "You Win! Scissors beats Paper";
        }
        else
            drawCount++;
            return "Draw! Go Again.";
        
    }
}

function checkIfWinner(){
    if (playerWins === 5 || computerWins === 5){
        victory.textContent = determineWinner();
        results.appendChild(victory);
    }

}

function determineWinner(){
    if (playerWins > computerWins)
        return "Congrats you won!"
    else
        return "Computer reigns supreme!"
}

const btns = document.querySelectorAll('.choice');
btns.forEach(choice => {
    choice.addEventListener('click', (e) => {
        let outcome = playRound(e.target.id); 
        outputResult(outcome);
        checkIfWinner();
    });   
});

function outputResult(roundOutcome){    
    compChoice.textContent = "The Computer chose: " + computerSelection;
    results.appendChild(compChoice);
    
    roundResult.textContent = roundOutcome;
    results.appendChild(roundResult);
    
    tally.textContent = (" Player: " + playerWins + " Computer: " + computerWins);
    results.appendChild(tally);
}