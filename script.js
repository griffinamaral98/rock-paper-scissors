let playerScore = 0;
let computerScore = 0;
let roundWinner = "";
let modalContent;

const getComputerChoice = () => {
	let selection = "";
	let randNum = Math.floor(Math.random() * 3) + 1;

	switch (randNum) {
		case 1:
			selection = "rock";
			break;
		case 2:
			selection = "paper";
			break;
		case 3:
			selection = "scissors";
	}

	return selection;
};

const playRound = (playerSelection, computerSelection) => {
	if (playerSelection === computerSelection) {
		roundWinner = "Tie";
	} else if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		playerScore++;
		roundWinner = "Player";
	} else if (playerSelection === "cheat") {
		playerScore = 5;
		roundWinner = "Cheater";
	} else {
		computerScore++;
		roundWinner = "Computer";
	}

	updateWinnerMessage(roundWinner, playerSelection, computerSelection);
	updateScore();
	gameWinner();

	if (isGameOver()) {
		modal();
	}
};

const updateScore = () => {
	const score = document.querySelector(".score");

	if (playerScore > computerScore) {
		score.innerHTML = "You won!";
	} else if (playerScore < computerScore) {
		score.innerHTML = "You lost!";
	} else {
		score.innerHTML = "It's a tie!";
	}

	score.innerHTML += ` Player: ${playerScore} - Computer: ${computerScore}`;
};

const gameWinner = () => {
	const winner = document.querySelector(".winner");

	if (playerScore > computerScore) {
		winner.innerHTML = "You Win!";
	} else {
		winner.innerHTML = "You Lose!";
	}
};

const modal = () => {
	const playAgainModal = document.querySelector(".play-again");
	playAgainModal.style.display = "block";
	modalContent = document.querySelector(".modal-content");
	addResetButton();
};

const addResetButton = () => {
	const playAgainModal = document.querySelector(".play-again");
	const resetButton = document.createElement("button");
	resetButton.innerText = "Play Again";

	resetButton.addEventListener("click", () => {
		playerScore = 0;
		computerScore = 0;
		roundWinner = "";
		const scoreMessage = document.querySelector(".round-winner");
		scoreMessage.innerHTML = "First to score 5 points wins";

		playAgainModal.style.display = "none";

		const existingResetButton = modalContent.querySelector("button");
		if (existingResetButton) {
			modalContent.removeChild(existingResetButton);
		}

		const winner = document.querySelector(".winner");
		winner.innerHTML = "";
		playAgainModal.style.display = "none";

		const score = document.querySelector(".score");
		score.innerHTML = `Player: ${playerScore} - Computer: ${computerScore}`;
	});

	const existingResetButton = modalContent.querySelector("button");
	if (existingResetButton) {
		modalContent.removeChild(existingResetButton);
	}

	modalContent.appendChild(resetButton);

	playAgainModal.classList.add("hide");
};

const isGameOver = () => playerScore >= 5 || computerScore >= 5;

const updateWinnerMessage = (winner, playerSelection, computerSelection) => {
	const roundWinnerMessage = document.querySelector(".round-winner");

	if (winner === "Player") {
		roundWinnerMessage.innerHTML = `${playerSelection} beats ${computerSelection}`;
	} else if (winner === "Computer") {
		roundWinnerMessage.innerHTML = `${computerSelection} beats ${playerSelection}`;
	} else if (winner === "Tie") {
		roundWinnerMessage.innerHTML = `${playerSelection} ties ${computerSelection}`;
	} else {
		roundWinnerMessage.innerHTML = "You are a filthy cheater...";
	}
};

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const winner = document.querySelector(".winner");
const score = document.querySelector(".score");
const cheatCode = document.querySelector("h1");

rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () =>
	playRound("paper", getComputerChoice())
);
scissorsBtn.addEventListener("click", () =>
	playRound("scissors", getComputerChoice())
);
cheatCode.addEventListener("click", () => {
	playRound("cheat", getComputerChoice);
});
