let playerScore = 0;
let compScore = 0;
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');



//Game will be played against the computer
//Create a function that will randomly return rock, pape r, or scissors for the computer
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}



//function gamePlay(playerSelection, computerSelection) {
//    playerSelection = playerSelection.toLowerCase();

    // Making outcomes
//    const outcomes = {
//        rock: { beats: 'scissors', losesTo: 'paper' },
//        paper: { beats: 'rock', losesTo: 'scissors' },
//        scissors: { beats: 'paper', losesTo: 'rock'}
//    };

    // Making sure user selection fits
//    if (!outcomes[playerSelection]) {
//        const p = document.createElement('p');
//        p.innerText = "Invalid selection. Please choose Rock, Paper, or Scissors.";
//    }

//    if (playerSelection === computerSelection) {
//        const p = document.createElement('p');
//        p.innerText = "It's a tie";
//    } else if (outcomes[playerSelection].beats === computerSelection) {
//        const p = document.createElement('p');
//        p.innerText = "You win";
//    } else {
//        const p = document.createElement('p');
//        p.innerText = "You lose";
//    }
//}


const gamePlay = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        const p = document.createElement('p');
        p.innerText = `It's a tie, you both picked ${playerSelection}`;
        outcomeDiv.appendChild(p);  
        playerScore++
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        const p = document.createElement('p');
        p.innerText = `You lost! Scissors loses to rock`;
        outcomeDiv.appendChild(p);
        compScore++
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        const p = document.createElement('p');
        p.innerText = `You Win! Scissors beats Paper`;
        outcomeDiv.appendChild(p);
        playerScore++
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        const p = document.createElement('p');
        p.innerText = `You Lost! Rock loses to Paper`;
        outcomeDiv.appendChild(p);
        compScore++
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        const p = document.createElement('p');
        p.innerText = `You Win! Rock beats scissors`;
        outcomeDiv.appendChild(p);
        playerScore++
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        const p = document.createElement('p');
        p.innerText = `You Lose! Paper loses to Scissors`;
        outcomeDiv.appendChild(p);
        compScore++
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        const p = document.createElement('p');
        p.innerText = `You Win! Paper beats Rock`;
        outcomeDiv.appendChild(p);
        playerScore++
    }
}

const checkWinner = (playerScore, compScore) => {
    console.log( playerScore , compScore);
    if (playerScore === 5) {
        const h2 = document.createElement('h2');
        h2.classList.add('player-won');
        h2.innerText = `You Won! You beat the computer! ${playerScore} to ${compScore}`;
        outcomeDiv.append(h2);
    }
    else if (compScore === 5 && playerScore < 5) {
        const h2 = document.createElement('h2');
        h2.classList.add('computer-won');
        h2.innerText = `You Lose! You lose to the computer! ${compScore} to ${playerScore}`;
        outcomeDiv.append(h2);
    }
}

const updateScores = (playerScore, compScore) => {
    playerScoreSpan.innerText = `Player Score:   ${playerScore}                `;
    computerScoreSpan.innerText = `Computer Score: ${compScore}             `;
}


rockBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    gamePlay(playerSelection,computerSelection);
    checkWinner(playerScore, compScore);
});

paperBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    gamePlay(playerSelection,computerSelection);
    updateScores(playerScore,compScore);
    checkWinner(playerScore, compScore);
});

scissorBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    gamePlay(playerSelection,computerSelection);
    updateScores(playerScore,compScore);
    checkWinner(playerScore, compScore);
});




//Testing out function gamePlay
//const playerChoice = 'Paper';
//const result = gamePlay(playerChoice, computerChoice);
//console.log(playerChoice);
//console.log(result);
// Its working



//function game() {
//    for (let i = 0; i < 1; i++) {
//        let playerChoice = prompt("Enter Rock, Paper, or Scissors").toLowerCase(); //Allows for user input

//        if (playerChoice === null || playerChoice.trim() === "") {
//            console.log("No input received. Please enter Rock, Paper, or Scissors.");
//            i--; // Decrement the loop counter to repeat this iteration
//            continue;
//        }

//        const computerChoice = getComputerChoice();                 
//        console.log("Player's choice: " + playerChoice);
//        console.log("Computer's choice: " + computerChoice);
//        console.log(gamePlay(playerChoice, computerChoice));
//    }
// }

//game();
//looping the game to play 5 times


