let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

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
    score.innerHTML = `Player: ${playerScore} - Computer: ${computerScore}`;
  } else {
    computerScore++;
    roundWinner = "Computer";
    score.innerHTML = `Player: ${playerScore} - Computer: ${computerScore}`;
  }
  updateWinnerMessage(roundWinner, playerSelection, computerSelection);
};

const playerChoice = (playerSelection) => {
  const computerSelection = getComputerChoice();
  if (isGameOver()) {
    modal();
    gameWinner();
    return;
  }

  playRound(playerSelection, computerSelection);
  updateScore();

  if (isGameOver()) {
    modal();
    gameWinner();
  }
};

updateScore = () => {
  if (roundWinner === "Tie") {
    document.querySelector(".winner-or-loser").innerHTML = "It's a tie!";
  } else if (roundWinner === "Player") {
    document.querySelector(".winner-or-loser").innerHTML = "You won!";
  } else if (roundWinner === "Computer") {
    document.querySelector(".winner-or-loser").innerHTML = "You lost!";
  }
};

const updateWinnerMessage = (winner, playerSelection, computerSelection) => {
  if (winner === "Player") {
    roundWinnerMessage.innerHTML = `${playerSelection} beats ${computerSelection}`;
  } else if (winner === "Computer") {
    roundWinnerMessage.innerHTML = `${computerSelection} beats ${playerSelection}`;
  } else {
    roundWinnerMessage.innerHTML = `${playerSelection} ties ${computerSelection}`;
  }
};

const gameWinner = () => {
  return playerScore > computerScore
    ? (winner.innerHTML = "You Win!")
    : (winner.innerHTML = "You Lose!");
};

const modal = () => {
  playAgainModal.style.display = "block";
};

const isGameOver = () => playerScore == 5 || computerScore == 5;

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const winner = document.querySelector(".winner");
const score = document.querySelector(".score");
const reset = document.querySelector(".reset");
const playAgainModal = document.querySelector(".play-again");
const roundWinnerMessage = document.querySelector(".round-winner");
const scoreInfo = document.querySelector(".winner-or-loser");
const scoreMessage = document.querySelector(".score");

score.innerHTML = `Player: ${playerScore} - Computer: ${computerScore}`;
rockBtn.addEventListener("click", () => playerChoice("rock"));
paperBtn.addEventListener("click", () => playerChoice("paper"));
scissorsBtn.addEventListener("click", () => playerChoice("scissors"));
