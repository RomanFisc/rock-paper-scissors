//Game will be played against the computer
//Create a function that will randomly return rock, paper, or scissors for the computer
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomArray = Math.floor(Math.random() * 3 )
    return choices[randomArray];
}
// Remove comments to test this function in the console
//const computerChoice = getComputerChoice();
//console.log("The computer chose:" + computerChoice);
// Returns rock, paper, scissors at random

