const getComputerChoice = () => {
  let rock = 1;
  let scissors = 2;
  let num = Math.floor(Math.random() * 3) + 1;

  if (num === rock) {
    return "Rock";
  } else if (num === scissors) {
    return "Scissors";
  } else {
    return "Paper";
  }
};

getComputerChoice();
