let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    return randomNumber === 1 ? "Rock"
    : randomNumber === 2 ? "Paper"
    : "Scissors";
}

const playConsole = document.getElementById("playConsole")
const scoresElement = document.getElementById("scores")
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

function playRound (humanChoice, computerChoice) {
    computerChoice = getComputerChoice().toLowerCase();

    if (humanChoice === computerChoice) {
        playConsole.textContent = `You played ${humanChoice}. The computer played ${computerChoice}.`
        scoresElement.textContent = `A tie! Your Score: ${humanScore} Computer Score: ${computerScore}`;

    } else if (
        humanChoice === "rock" && computerChoice === "scissors" || 
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
        ) {
        humanScore++;
        playConsole.textContent = `You played ${humanChoice}. The computer played ${computerChoice}.`
        scoresElement.textContent = `You won the round! Your Score: ${humanScore} Computer Score: ${computerScore}`;

        }
        else {
            computerScore++;
        }
        playConsole.textContent = `You played ${humanChoice}. The computer played ${computerChoice}.`
        scoresElement.textContent = `You lost the round! Your Score: ${humanScore} Computer Score: ${computerScore}`;

    if (humanScore === 5) {
        alert("You win the match!");
        humanScore = 0;
        computerScore = 0;
        scoresElement.textContent = `Your Score: ${humanScore} Computer Score: ${computerScore}`;
    } else if (computerScore === 5) {
        alert("You lose the match!");
        humanScore = 0;
        computerScore = 0;
        scoresElement.textContent = `Your Score: ${humanScore} Computer Score: ${computerScore}`;
    }
}


rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice);
})

paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice);
})

scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice);
})
