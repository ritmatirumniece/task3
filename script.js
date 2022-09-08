
//PROJECT 
let playerScore = 0;
let computerScore = 0;

const playerScoreSelector = document.querySelector('#playerScore');
const computerScoreSelector = document.querySelector('#computerScore');
const result = document.querySelector('#result');

let playerSelection;
const scissorsButton = document.querySelector('scissorsButton');
const paperButton = document.querySelector('paperButton');
const rockButton = document.querySelector('rockButton');

playerScoreSelector.innerHTML = playerScore;
computerScoreSelector.innerHTML = computerScore;

scissorsButton.addEventListener('click', () =>{
  playerSelection='scissors';
  // console.log(playerSelection)
  game();
  if(playerScore === 5 || computerScore === 5) {
    result.innerHTML = 'The game is over!';
    // console.log(result.innerHTML);
  }
});

paperButton.addEventListener('click', () =>{
  playerSelection='paper';
  // console.log(playerSelection)
  game();
  if(playerScore === 5 || computerScore === 5) {
    result.innerHTML = 'The game is over!';
    // console.log(result.innerHTML);
  }
});

rockButton.addEventListener('click', () =>{
  playerSelection='rock';
  // console.log(playerSelection)
  game();
  if(playerScore === 5 || computerScore === 5) {
    result.innerHTML = 'The game is over!';
    // console.log(result.innerHTML);
  }
});



const game = () => {
  if(playerSelection === 'scissors') {
  } else if(playerSelection === 'paper') {
  } else if(playerSelection === 'rock') {
  }
  
  let computerSelection = [Math.floor(Math.random() * selection.length)];
  if (computerSelection === 'scissors') {
  } else if (computerSelection === 'paper'){
  } else if (computerSelection === 'rock'){
  }
  playRound(playerSelection, computerSelection);
  return;
}

const playRound = (playerSelection, computerSelection) =>{
  if (playerSelection === computerSelection) {
    result.innerHTML = ` It is draw! No one wins! You both have picked ${playerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreSelector.innerHTML = playerScore;
    result.innerHTML = `You win! ${playerSelection} beats ${computerSelection}!`;
  } else {
    computerScore++;
    computerScoreSelector.innerHTML = computerScore;
    result.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}!`;
  }
  return
};







// KAUT KAS NO IEPRIEKŠĒJĀ KODA
// function computerPlay() {
//   const selection = ["rock", "paper", "scissors"];
//   return selection[Math.floor(Math.random() * selection.length)];
// }

// function playerPlay() {
//   // const playerSelection = prompt(
//   //   "Choose one - Rock, Paper, Scissors and type in...."
//   // ).toLowerCase();
//   return playerSelection;
// }

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection === computerSelection) {
//     draw++;
//     return `No one wins! You both have picked ${playerSelection}`;
//   } else if (
//     (playerSelection === "rock" && computerSelection === "scissors") ||
//     (playerSelection === "paper" && computerSelection === "rock") ||
//     (playerSelection === "scissors" && computerSelection === "paper")
//   ) {
//     playerScore++;
//     return `You win! ${playerSelection} beats ${computerSelection}! Your score is ${playerScore}`;
//   } else {
//     computerScore++;
//     return `You lose! ${computerSelection} beats ${playerSelection} Computer score is ${computerScore} !`;
//   }
// }

// function game() {
//   for (let i = 1; i <= 5; i++) {
//     const computerSelection = computerPlay();
//     const playerSelection = playerPlay();
//     const roundResult = playRound(playerSelection, computerSelection);
//     console.log("round: ", i, "- result:", roundResult);
//   }
  // console.log("Score Card");
  // console.log(
  //   "Player: ",
  //   playerScore,
  //   " - Computer: ",
  //   computerScore,
  //   " - Draw: ",
  //   draw
  // );
//   if (playerScore > computerScore) {
//     console.log("You win!");
//   } else if (playerScore < computerScore) {
//     console.log("Computer wins!");
//   } else {
//     console.log("It is draw!");
//   }
// }
// game();


