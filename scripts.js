let choiceArray = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

const playerSelection = "rock";
const computerSelection = getComputerChoice(choiceArray);

console.log("Computer Choice: " + computerSelection);
console.log("Player Choice: " + playerSelection);

function playRound(playerSelection, computerSelection) {
    const rules = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (computerSelection === playerSelection) {
        console.log("It's a tie! Both chose " + computerSelection + ".");
        return 'tie';
    }

    if (rules[playerSelection] === computerSelection) {
        console.log('Player wins! ' + playerSelection + ' beats ' + computerSelection + '.');
        return 'player';
    }

    console.log('Computer wins! ' + computerSelection + ' beats ' + playerSelection + '.');
    return 'computer';
}

playRound(playerSelection, computerSelection);