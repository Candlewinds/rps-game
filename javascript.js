
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    return randomNumber === 1 ? "Rock"
    : randomNumber === 2 ? "Paper"
    : "Scissors";
}

function getHumanChoice () {
    return prompt("What do you play?")
}

function playRound (humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log(humanChoice)
    console.log(computerChoice)
}

getComputerChoice()
console.log(getComputerChoice)
getHumanChoice()
console.log(getHumanChoice)
playRound
console.log(playRound)
