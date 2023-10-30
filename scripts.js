let choiceArray = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

const computerSelection = getComputerChoice(choiceArray);

function playRound(playerSelection, computerSelection) {
    const rules = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (playerSelection === computerSelection) {
        console.log("It's a tie! Both chose " + playerSelection);
        return 'tie';
    }

    if (rules[playerSelection] === computerSelection) {
        console.log("You win! " + playerSelection + " beats " + computerSelection + ".");
        return 'player';
    }

    console.log("You lose! " + computerSelection + " beats " + playerSelection + ".");
    return 'computer';
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt("Enter your choice:").toLowerCase();
        const computerSelection = getComputerChoice(choiceArray);

        console.log(`Round ${round}: ${playerSelection} vs. ${computerSelection}`);
        const winner = playRound(playerSelection, computerSelection);

        if (winner === 'player') {
            playerScore++;
        } else if (winner === 'computer') {
            computerScore++;
        }        
    }

    if(playerScore > computerScore) {
        console.log('Player wins the game!');
    } else if (playerScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie! No overall winner.");
    }
}

game();