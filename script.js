const getComputerChoice = () => {
  let rock = 1;
  let paper = 2;
  let selection = "";
  let num = Math.floor(Math.random() * 3) + 1;

  if (num === rock) {
    selection = "rock";
  } else if (num === paper) {
    selection = "paper";
  } else {
    selection = "scissors";
  }

  return selection;
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Enter your selection of Rock, Paper, or Scissors: "
    ).toLowerCase();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    console.log(result);
    if (result.startsWith("You Win!")) {
      playerScore++;
    } else if (result.startsWith("You Lose!")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log(`You win the game!`);
  } else if (computerScore > playerScore) {
    console.log(`You lose the game!`);
  } else {
    console.log(`The game ended in a draw!`);
  }
};

game();
