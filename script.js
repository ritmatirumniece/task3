//PROJECT game: scissors, paper, rock
let playerScore = 0;
let computerScore = 0;

const playerScoreSelector = document.querySelector("#playerScore");
const computerScoreSelector = document.querySelector("#computerScore");
const result = document.querySelector("#result");
let gameOver = false;

let playerSelection;
const scissorsButton = document.querySelector("#scissorsButton");
const paperButton = document.querySelector("#paperButton");
const rockButton = document.querySelector("#rockButton");

playerScoreSelector.innerHTML = playerScore;
computerScoreSelector.innerHTML = computerScore;

scissorsButton.addEventListener("click", () => {
  playerSelection = "SCISSORS";
  console.log(playerSelection);
  playRound(playerSelection);
  if (playerScore === 5) {
    gameOver = true;
    result.innerHTML = "The game is over! You win!";
    console.log(result.innerHTML);
  } else if (computerScore === 5) {
    gameOver = true;
    result.innerHTML = "The game is over! Computer wins!";
    console.log(result.innerHTML);
  }
});

paperButton.addEventListener("click", () => {
  playerSelection = "PAPER";
  console.log(playerSelection);
  playRound(playerSelection);
  if (playerScore === 5) {
    gameOver = true;
    result.innerHTML = "The game is over! You win!";
    console.log(result.innerHTML);
  } else if (computerScore === 5) {
    gameOver = true;
    result.innerHTML = "The game is over! Computer wins!";
    console.log(result.innerHTML);
  }
});

rockButton.addEventListener("click", () => {
  playerSelection = "ROCK";
  console.log(playerSelection);
  playRound(playerSelection);
  if (playerScore === 5) {
    gameOver = true;
    result.innerText = "The game is over! You win!";
    console.log(result.innerText);
  } else if (computerScore === 5) {
    gameOver = true;
    result.innerText = "The game is over! Computer wins!";
    console.log(result.innerText);
  }
});

function computerSelection() {
  const selection = ["ROCK", "PAPER", "SCISSORS"];
  return selection[Math.floor(Math.random() * selection.length)];
}
// const computerSelection = () =>{
//   let arr = ["ROCK", "PAPER", "SCISSORS"];
//   let randNum = Math.floor(Math.random() * arr.length);
//   let x = arr[randNum];
//   return x;
// }

const game = () => {
  if (playerSelection === "SCISSORS") {
  } else if (playerSelection === "PAPER") {
  } else if (playerSelection === "ROCK") {
  }
};

function playRound(playerSelection) {
  if (gameOver == false) {
    computerSelectionVariable = computerSelection();
    if (playerSelection === computerSelectionVariable) {
      result.innerText = ` It is draw! No one wins! You both have picked ${playerSelection}`;
    } else if (
      (playerSelection === "ROCK" &&
        computerSelectionVariable === "SCISSORS") ||
      (playerSelection === "PAPER" && computerSelectionVariable === "ROCK") ||
      (playerSelection === "SCISSORS" && computerSelectionVariable === "PAPER")
    ) {
      playerScore++;
      playerScoreSelector.innerText = playerScore;
      result.innerText = `You win! ${playerSelection} beats ${computerSelectionVariable}!`;
    } else {
      computerScore++;
      computerScoreSelector.innerText = computerScore;
      result.innerText = `You lose! ${computerSelectionVariable} beats ${playerSelection}!`;
    }
  }
}

//PROJECT
// let playerScore = 0;
// let computerScore = 0;
// const playerScoreSelector = document.querySelector("#playerScore");
// const computerScoreSelector = document.querySelector("#computerScore");
// const result = document.querySelector("#result");
// let playerSelection;
// const scissorsButton = document.querySelector("#scissorsButton");
// const paperButton = document.querySelector("#paperButton");
// const rockButton = document.querySelector("#rockButton");
// playerScoreSelector.innerHTML = playerScore;
// computerScoreSelector.innerHTML = computerScore;
// scissorsButton.addEventListener("click", () => {
//   playerSelection = "SCISSORS";
//   console.log(playerSelection);
//   playRound(playerSelection);
//   if (playerScore === 5) {
//     result.innerHTML = "The game is over! You win!";
//     console.log(result.innerHTML);
//   } else if (computerScore === 5) {
//     result.innerHTML = "The game is over! Computer wins!";
//     console.log(result.innerHTML);
//   }
// });
// paperButton.addEventListener("click", () => {
//   playerSelection = "PAPER";
//   console.log(playerSelection);
//   playRound(playerSelection);
//   if (playerScore === 5) {
//     result.innerHTML = "The game is over! You win!";
//     console.log(result.innerHTML);
//   } else if (computerScore === 5) {
//     result.innerHTML = "The game is over! Computer wins!";
//     console.log(result.innerHTML);
//   }
// });
// rockButton.addEventListener("click", () => {
//   playerSelection = "ROCK";
//   console.log(playerSelection);
//   playRound(playerSelection);

//   if (playerScore === 5) {
//     result.innerHTML = "The game is over! You win!";
//     console.log(result.innerHTML);
//     result.innerText = "The game is over! You win!";
//     console.log(result.innerText);
//   } else if (computerScore === 5) {
//     result.innerHTML = "The game is over! Computer wins!";
//     console.log(result.innerHTML);
//     result.innerText = "The game is over! Computer wins!";
//     console.log(result.innerText);
//   }
// });

// const game = () => {
//   if (playerSelection === "SCISSORS") {
//   } else if (playerSelection === "PAPER") {
//   } else if (playerSelection === "ROCK") {
//   }
// };
// function computerSelection() {
//   const selection = ["ROCK", "PAPER", "SCISSORS"];
//   return selection[Math.floor(Math.random() * selection.length)];
// }

// function playRound(playerSelection) {
//   computerSelection = computerSelection();
//   if (playerSelection === computerSelection) {
//     computerSelection = computerSelection();
//     if (playerSelection === computerSelection) {
//       result.innerText = ` It is draw! No one wins! You both have picked ${playerSelection}`;
//     } else if (
//       (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
//       (playerSelection === "PAPER" && computerSelection === "ROCK") ||
//       (playerSelection === "SCISSORS" && computerSelection === "PAPER")
//     ) {
//       playerScore++;
//       playerScoreSelector.innerText = playerScore;
//       result.innerText = `You win! ${playerSelection} beats ${computerSelection}!`;
//     } else {
//       computerScore++;
//       computerScoreSelector.innerText = computerScore;
//       result.innerText = `You lose! ${computerSelection} beats ${playerSelection}!`;
//     }
//   }
// }

//Other variant
//PROJECT game: scissors, paper, rock
// let playerScore = 0;
// let computerScore = 0;

// const playerScoreSelector = document.querySelector("#playerScore");
// const computerScoreSelector = document.querySelector("#computerScore");
// const result = document.querySelector("#result");
// let playerSelection;
// const scissorsButton = document.querySelector("#scissorsButton");
// const paperButton = document.querySelector("#paperButton");
// const rockButton = document.querySelector("#rockButton");
// playerScoreSelector.innerHTML = playerScore;
// computerScoreSelector.innerHTML = computerScore;
// scissorsButton.addEventListener("click", () => {
//   playerSelection = "SCISSORS";
//   console.log(playerSelection);
//   playRound(playerSelection);
//   if (playerScore === 5) {
//     result.innerHTML = "The game is over! You win!";
//     console.log(result.innerHTML);
//   } else if (computerScore === 5) {
//     result.innerHTML = "The game is over! Computer wins!";
//     console.log(result.innerHTML);
//   }
// });
// paperButton.addEventListener("click", () => {
//   playerSelection = "PAPER";
//   console.log(playerSelection);
//   playRound(playerSelection);
//   if (playerScore === 5) {
//     result.innerHTML = "The game is over! You win!";
//     console.log(result.innerHTML);
//   } else if (computerScore === 5) {
//     result.innerHTML = "The game is over! Computer wins!";
//     console.log(result.innerHTML);
//   }
// });
// rockButton.addEventListener("click", () => {
//   playerSelection = "ROCK";
//   console.log(playerSelection);
//   playRound(playerSelection);
//   if (playerScore === 5) {
//     result.innerText = "The game is over! You win!";
//     console.log(result.innerText);
//   } else if (computerScore === 5) {
//     result.innerText = "The game is over! Computer wins!";
//     console.log(result.innerText);
//   }
// });
// const computerSelection = () => {
//   let arr = ["ROCK", "PAPER", "SCISSORS"];
//   let randNum = Math.floor(Math.random() * arr.length);
//   let x = arr[randNum];
//   return x;
// }

// const game = () => {
//   if (playerSelection === "SCISSORS") {
//   } else if (playerSelection === "PAPER") {
//   } else if (playerSelection === "ROCK") {
//   }
// };

// function playRound(playerSelection) {
//   computerSelection = computerSelection()
//   if (playerSelection === computerSelection) {
//     result.innerText = ` It is draw! No one wins! You both have picked ${playerSelection}`;
//   } else if (
//     (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
//     (playerSelection === "PAPER" && computerSelection === "ROCK") ||
//     (playerSelection === "SCISSORS" && computerSelection === "PAPER")
//   ) {
//     playerScore++;
//     playerScoreSelector.innerText = playerScore;
//     result.innerText = `You win! ${playerSelection} beats ${computerSelection}!`;
//   } else {
//     computerScore++;
//     computerScoreSelector.innerText = computerScore;
//     result.innerText = `You lose! ${computerSelection} beats ${playerSelection}!`;
//   }
// };
