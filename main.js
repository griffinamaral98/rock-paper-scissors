function getComputerChoice() {
	const num = Math.floor(Math.random() * 3) + 1;

	if (num === 1) {
		return "rock";
	} else if (num === 2) {
		return "paper";
	} else {
		return "scissors";
	}
}

playRound = (playerSelection, computerSelection) => {
	computerSelection = getComputerChoice();
	console.log(computerSelection);
	playerSelection = prompt("Enter your selection:").toString().toLowerCase();

	if (computerSelection === playerSelection) {
		console.log("It's a tie!");
	} else if (
		(computerSelection === "rock" && playerSelection === "paper") ||
		(computerSelection === "scissors" && playerSelection === "rock") ||
		(computerSelection === "paper" && playerSelection === "scissors")
	) {
		console.log("You win!");
	} else if (
		(computerSelection === "rock" && playerSelection === "scissors") ||
		(computerSelection === "scissors" && playerSelection === "paper") ||
		(computerSelection === "paper" && playerSelection === "rock")
	) {
		console.log("You lose!");
	}
};

playRound();
