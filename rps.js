//Game will be played against the computer
//Create a function that will randomly return rock, paper, or scissors for the computer
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}
// Remove comments to test this function in the console
const computerChoice = getComputerChoice();
console.log("The computer chose: " + computerChoice);
// Returns rock, paper, scissors at random


// Ask user to input rock, paper, or scissors
// Generate computer choice 
// If user submission equals computer choice 
//      Return "Tie"
// Else if user submission beats computer 
//      Return "You win"
// Else if user_submission loses to computer submission 
//      Return "you lose"

function gamePlay(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    // Making outcomes
    const outcomes = {
        rock: { beats: 'scissors', losesTo: 'paper' },
        paper: { beats: 'rock', losesTo: 'scissors' },
        scissors: { beats: 'paper', losesTo: 'rock'}
    };

    // Making sure user selection fits
    if (!outcomes[playerSelection]) {
        return "Invalid selection. Please choose Rock, Paper, or Scissors.";
    }

    if (playerSelection === computerSelection) {
        return "It's a tie";
    } else if (outcomes[playerSelection].beats === computerSelection) {
        return "You win";
    } else {
        return "You lose";
    }
}

//Testing out function gamePlay
const playerChoice = 'Paper';
const result = gamePlay(playerChoice, computerChoice);
console.log(playerChoice);
console.log(result);
// Its working


