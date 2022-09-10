//PROJECT
let playerScore = 0;
let computerScore = 0;

const playerScoreSelector = document.querySelector("#playerScore");
const computerScoreSelector = document.querySelector("#computerScore");
const result = document.querySelector("#result");

let playerSelection;
const scissorsButton = document.querySelector("#scissorsButton");
const paperButton = document.querySelector("#paperButton");
const rockButton = document.querySelector("#rockButton");

playerScoreSelector.innerHTML = playerScore;
computerScoreSelector.innerHTML = computerScore;

scissorsButton.addEventListener("click", () => {
  playerSelection = "SCISSORS";
  console.log(playerSelection);
  game();
  if (playerScore === 5) {
    result.innerHTML = "The game is over! You win!";
    console.log(result.innerHTML);
  } else if (computerScore === 5) {
    result.innerHTML = "The game is over! Computer wins!";
    console.log(result.innerHTML);
  }
});

paperButton.addEventListener("click", () => {
  playerSelection = "PAPER";
  console.log(playerSelection);
  game();
  if (playerScore === 5) {
    result.innerHTML = "The game is over! You win!";
    console.log(result.innerHTML);
  } else if (computerScore === 5) {
    result.innerHTML = "The game is over! Computer wins!";
    console.log(result.innerHTML);
  }
});

rockButton.addEventListener("click", () => {
  playerSelection = "ROCK";
  console.log(playerSelection);
  game();
  if (playerScore === 5) {
    result.innerHTML = "The game is over! You win!";
    console.log(result.innerHTML);
  } else if (computerScore === 5) {
    result.innerHTML = "The game is over! Computer wins!";
    console.log(result.innerHTML);
  }
});

const game = () => {
  if (playerSelection === "SCISSORS") {
  } else if (playerSelection === "PAPER") {
  } else if (playerSelection === "ROCK") {
  }

  // function computerPlay() {
  //   const selection = ["rock", "paper", "scissors"];
  //   return selection[Math.floor(Math.random() * selection.length)];
  // }

  let computerSelection = Math.floor(Math.random() * 3 + 1);
  if (computerSelection === 1) {
    computerSelection === "scissors";
    console.log("Computer: " + computerSelection);
  } else if (computerSelection === 2) {
    computerSelection === "paper";
    console.log("Computer: " + computerSelection);
  } else if (computerSelection === 3) {
    computerSelection === "rock";
    console.log("Computer: " + computerSelection);
  }
  playRound(playerSelection, computerSelection);
  return;
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    result.innerHTML = ` It is draw! No one wins! You both have picked ${playerSelection}`;
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    playerScore++;
    playerScoreSelector.innerHTML = playerScore;
    result.innerHTML = `You win! ${playerSelection} beats ${computerSelection}!`;
  } else {
    computerScore++;
    computerScoreSelector.innerHTML = computerScore;
    result.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}!`;
  }
  return;
};
