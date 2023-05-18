let playerWins = 0;
let computerWins = 0;
let computerSelection = "";

const results = document.querySelector(".results");
const compChoice = document.createElement('p');
const roundResult = document.createElement('p');
const tally = document.createElement('p');
const victory = document.createElement('p');
const compImg = document.querySelector(".computerIcon");

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
    changeButtons(playerSelection);
    if (playerSelection === "rock"){
        return rockLogic();
    }
    else if (playerSelection === "paper"){
        return paperLogic();      
    }
    else if (playerSelection === "scissors"){
        return scissorsLogic();       
    }
}

function rockLogic(){
    if (computerSelection === "Paper"){
        computerWins++;
        return "You Lose! Legally Not Superman stopped the Meteor!";
    }
    else if (computerSelection === "Scissors"){
        playerWins++;
        return "You Win! Poor Crab.";
    }
    else
        return "Draw! Go Again.";
}

function paperLogic(){
    if (computerSelection === "Scissors"){
        computerWins++;
        return "You Lose! Oh no! Legally Not Superman's one weakness, a Crab!";
    }
    else if (computerSelection === "Rock"){
        playerWins++;
        return "You Win! Legally Not Superman's ice breath stopped the Meteor!";
    }
    else
        return "Draw! Go Again.";
}

function scissorsLogic(){
    if (computerSelection === "Rock"){
        computerWins++;
        return "You Lose! Crab lost to the Meteor. RIP Crab";
    }
    else if (computerSelection === "Paper"){
        playerWins++;
        return "You Win! The Crab seems to have rendered Legally Not Superman weak and vulnerable";
    }
    else
        return "Draw! Go Again.";
}

function checkIfWinner(){
    if (playerWins === 5 || computerWins === 5){
        victory.textContent = determineWinner();
        results.appendChild(victory);
        btns.forEach(btn => btn.disabled = true);
        createResetButton();
    }

}

function determineWinner(){
    if (playerWins > computerWins)
        return "Congrats you won!"
    else
        return "Computer reigns supreme!"
}

function createResetButton(){
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Go Again?';
    resetButton.classList.add("reset");
    results.appendChild(resetButton);
    const reset = document.querySelector('.reset');
    reset.addEventListener('click', () => resetGame());
}

function resetGame(){
    playerWins = 0;
    computerWins = 0;
    btns.forEach(btn => btn.disabled = false);
    compImg.src = '';
    changeButtons('reset');
    results.replaceChildren();
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
    displayOpponent();
    
    roundResult.textContent = roundOutcome;
    results.appendChild(roundResult);
    
    tally.textContent = (" Player: " + playerWins + " Computer: " + computerWins);
    results.appendChild(tally);
}

function changeButtons(clicked){
    const meteor = document.querySelector("img.meteor");
    const hero = document.querySelector("img.hero");
    const crab = document.querySelector("img.crab");
   
    if (clicked === 'rock'){
        meteor.classList.add('meteorColor');
        hero.classList.remove('heroColor');
        crab.classList.remove('crabColor');
    }
    if (clicked === 'paper'){
        meteor.classList.remove('meteorColor');
        hero.classList.add('heroColor');
        crab.classList.remove('crabColor');       
    }
    if (clicked === 'scissors'){
        meteor.classList.remove('meteorColor');
        hero.classList.remove('heroColor');
        crab.classList.add('crabColor');        
    }
    if (clicked === 'reset'){
        meteor.classList.remove('meteorColor');
        hero.classList.remove('heroColor');
        crab.classList.remove('crabColor');   
    }
}

function displayOpponent(){
    if (computerSelection === 'Rock'){
        compImg.src = './icons/meteor-1.png';
    }
    if (computerSelection === 'Paper'){
        compImg.src = './icons/hero-1.png';
    }
    if (computerSelection === 'Scissors'){
        compImg.src = './icons/crab-1.png';
    }
}