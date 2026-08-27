let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {

    const choices = ["rock", "paper", "scissors"];

    // Computer randomly chooses
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    // Check the winner
    if (playerChoice === computerChoice) {
        result = "It's a Draw! 🤝";
    }
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win! 🎉";
        playerScore++;
    }
    else {
        result = "Computer Wins! 🤖";
        computerScore++;
    }

    // Display choices
    document.getElementById("player-choice").textContent = playerChoice;
    document.getElementById("computer-choice").textContent = computerChoice;

    // Display result
    document.getElementById("result-message").textContent = result;

    // Update scores
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}

function resetGame() {

    playerScore = 0;
    computerScore = 0;

    document.getElementById("player-choice").textContent = "-";
    document.getElementById("computer-choice").textContent = "-";
    document.getElementById("result-message").textContent = "Make your choice!";

    document.getElementById("player-score").textContent = "0";
    document.getElementById("computer-score").textContent = "0";
}