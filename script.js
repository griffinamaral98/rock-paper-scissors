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
  // Player selects Rock
  if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  } else if (playerSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  } else {
    // Player selects Paper
    if (playerSelection === "paper" && computerSelection === "rock") {
      console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection === computerSelection) {
      console.log("It's a tie!");
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else {
      // Player selects Scissors
      if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
      } else if (playerSelection === computerSelection) {
        console.log("It's a tie!");
      } else if (
        playerSelection === "scissors" &&
        computerSelection === "rock"
      ) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
      }
    }
  }
};

const playerSelection = prompt(
  "Enter your selection of Rock, Paper, or Scissors: "
).toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
