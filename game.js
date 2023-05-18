/* Ask for a user insput XX
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
    else
        drawCount++; //To decrease the Round (i variable) in game()
        return "Please choose Rock, Paper, or Scissors";

}

function game(){
    playerWins = 0;
    computerWins = 0;
    drawCount = 0;
    for (let i = 1; i <= 5; i++){
        let playerSelection = prompt("Whatcha choosin? Best of 5");
        let computerSelection = getComputerChoice();
        // console.log(playRound(playerSelection, computerSelection));
        // console.log("Player: " + playerWins);
        // console.log("Computer: " + computerWins);

        /* More climactic game setting. Computer cheats to force 5 rounds of play*/
        if (playerWins === 2 && i < 5){
            console.log(computerWinsRound(playerSelection))
            console.log("Player: " + playerWins);
            console.log("Computer: " + computerWins);
        }
        else {
            console.log(playRound(playerSelection, computerSelection));
            console.log("Player: " + playerWins);
            console.log("Computer: " + computerWins);
        }
    


        //If either player gets to 3 wins before 5 rounds, they win the set so the loop needs
        //to end
        if (playerWins === 3 || computerWins === 3){
            i = 6;
        }

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

function computerWinsRound(playerSelection){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock"){
        computerWins++;
        return "You Lose! Paper beats Rock.";
    }
    else if (playerSelection === "paper"){
        computerWins++;
        return "You Lose! Scissors beats Paper.";
    }
    else if (playerSelection === "scissors"){
        computerWins++;
        return "You Lose! Rock beats Scissors.";
    }
    else
        drawCount++; //To decrease the Round (i variable) in game()
        return "Please choose Rock, Paper, or Scissors";
}

//Game UI
const btns = document.querySelectorAll('button');
btns.forEach(choice => {
    choice.addEventListener('click', (e) => {
        const results = document.querySelector(".results");
        const roundResult = document.createElement('p');
        roundResult.textContent = playRound(e.target.id, "Paper");
        results.appendChild(roundResult);
    });   
});