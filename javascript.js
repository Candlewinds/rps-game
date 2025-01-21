let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    return randomNumber === 1 ? "Rock"
    : randomNumber === 2 ? "Paper"
    : "Scissors";
}

function getHumanChoice () {
    return prompt("What do you play?");
}

function playRound (humanChoice, computerChoice) {
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice().toLowerCase();
    console.log(humanChoice);
    console.log(computerChoice);
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        console.log(`Scores are now: ${humanScore} Computer Score: ${computerScore}`);
    } else if (
        humanChoice === "rock" && computerChoice === "scissors" || 
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
        ) {
        humanScore++
        console.log("You win!");
        console.log(`Scores are now: Human Score - ${humanScore} Computer Score - ${computerScore}`);
        }
        else {
            computerScore++;
            console.log("You lose!");
            console.log(`Scores are now: ${humanScore} Computer Score: ${computerScore}`);
        }
}

function playGame(humanChoice, computerChoice) {
    playRound(humanChoice, computerChoice); 
    playRound(humanChoice, computerChoice); 
    playRound(humanChoice, computerChoice); 
    playRound(humanChoice, computerChoice); 
    playRound(humanChoice, computerChoice); 
}

playGame();