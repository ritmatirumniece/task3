//diognal of square

let aa = 9;
let bb = 9;
const d = Math.sqrt(aa ** 2 + bb ** 2);
console.log(d);

//area of triangal
let a = 5;
let b = 6;
let c = 7;
const s = (a + b + c) / 2;
const area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
console.log(area);

//circumference and surface area
let r = 4;
const C = 2 * Math.PI * r;
const surfaceArea = Math.PI * r * r;
console.log(C, surfaceArea);

//larger of the two
// let num1, num2;
// num1=window.prompt('Insert the First integer');
// num2=window.prompt('Insert the Second integer');
// if(num1>num2) {
//     console.log(num1);
// } else if (num2>num1) {
//     console.log(num2);
// }

//even or odd
// const number = prompt('Enter a number...')
// if(number %2 ==0) {
//     console.log('The number is even');
// } else {
//     console.log('The number is odd');
// }

//PROJECT
let playerScore = 0,
  computerScore = 0,
  draw = 0,
  result = 0;

function computerPlay() {
  const selection = ["rock", "paper", "scissors"];
  return selection[Math.floor(Math.random() * selection.length)];
}

function humanPlay() {
  const playerSelection = prompt(
    "Choose one - Rock, Paper, Scissors and type in...."
  ).toLowerCase();
  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    draw++;
    return `No one wins! You both have picked ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return `You win! Rock beats Scissors! Your score is ${playerScore}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return `You win! Paper beats Rock! Your score is ${playerScore + 1}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return `You win! Scissors beats Paper! Your score is ${playerScore + 1}`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection} Computer score is ${computerScore} !`;
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    const computerSelection = computerPlay();
    const playerSelection = humanPlay();
    const roundResult = playRound(playerSelection, computerSelection);
    console.log("round: ", i, "- result", roundResult);
  }
  console.log("Score Card");
  console.log(
    "Player: ",
    playerScore,
    " - Computer: ",
    computerScore,
    " - Draw: ",
    draw
  );
  if (playerScore > computerScore) {
    console.log("You win!");
  } else {
    console.log("Computer wins!");
  }
}
game();
