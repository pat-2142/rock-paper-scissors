let choiceArray = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choiceArray[Math.floor(Math.random()*choiceArray.length)];
}

console.log(getComputerChoice(choiceArray));