let playerScore = 0;
let computerScore = 0;

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

	// if (
	// 	playerSelection === "paper" ||
	// 	playerSelection === "rock" ||
	// 	playerSelection === "scissors"
	// ) {
	// 	return;
	// } else {
	// 	console.log("Please enter a valid selection");
	// }

	if (computerSelection === playerSelection) {
		console.log(
			`It's a tie! \nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}`
		);
	} else if (
		(computerSelection === "rock" && playerSelection === "paper") ||
		(computerSelection === "scissors" && playerSelection === "rock") ||
		(computerSelection === "paper" && playerSelection === "scissors")
	) {
		playerScore++;
		console.log(
			`You Win! \nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}`
		);
	} else if (
		(computerSelection === "rock" && playerSelection === "scissors") ||
		(computerSelection === "scissors" && playerSelection === "paper") ||
		(computerSelection === "paper" && playerSelection === "rock")
	) {
		computerScore++;
		console.log(
			`You Lose! \nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}`
		);
	}
};

game = () => {
	if (playerScore === 5) {
		console.log(
			`You Win! \nFinal score: \nPlayer: ${playerScore} \nComputer: ${computerScore}`
		);
	} else if (computerScore === 5) {
		console.log(
			`You Lose! \nFinal score: \nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}`
		);
	} else {
		playRound();
	}
};

game();
game();
game();
game();
game();
