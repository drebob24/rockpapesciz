/* Ask for a user insput
Generate computer choice XX
Compare User vs Computer XX
Return Win/Lose XX
Play 5 rounds XX
    keep tally XX
    declare overall winner XX
*/

let playerWins = 0;
let computerWins = 0;
let drawCount = 0;

function getComputerChoice(){
    let compChoice = getRandomInt();
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

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    
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
            drawCount++
            return "Draw! Go Again.";
        
    }
    else
        return "Please choose Rock, Paper, or Scissors";
}

function game(){
    playerWins = 0;
    computerWins = 0;
    drawCount = 0;
    for (let i = 1; i <= 5; i++){
        //Call to get user input
        let playerSelection = "PAPER";
        //Call to get computerChoice
        let computerSelection = getComputerChoice();
        //Call to Play Round
        console.log(playRound(playerSelection, computerSelection));
        //Print Result
        console.log("Player: " + playerWins);
        console.log("Computer: " + computerWins);
        //increase Player or Computer Win count --handled in playRound
        //To make it a true best of 5, Draws are not counted
        if (drawCount > 0) {
            i--;
            drawCount--;
        }
    }

    console.log(determineWinner(playerWins, computerWins));
}

function determineWinner($playerWins, $computerWins){
    if ($playerWins > $computerWins)
        return "Congrats you won!"
    else
        return "Computer reigns supreme!"
}