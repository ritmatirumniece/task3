
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









