/* Ask for a user insput
Generate computer choice
Compare User vs Computer
Return Win/Lose */

let compChoice = getRandomInt();

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