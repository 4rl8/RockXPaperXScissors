const result = document.querySelector(".RESULT");
const button = document.querySelector("button");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const win = document.querySelector(".WIN");
const lose = document.querySelector(".LOSE");
const draw = document.querySelector(".DRAW");
const parent = document.querySelector(".parent");

let userChoice;

function computerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);
  if (choice === 1) {
    return "rock";
  } else if (choice === 2) {
    return "paper";
  } else return "scissors";
}

const compChoice = computerChoice();

function humanChooseRock() {
  parent.innerHTML = `
    <div class="Choices">
<div class="Your-Choice">
  <h2>YOU</h2>
  <img class="human-choice-img" src="rock-emoji.png" alt="" />
</div>

<div class="Computer-Choice">
  <h2>COMPUTER</h2>
  <img class="computer-choice-img" src="${compChoice}-emoji.png" alt="" />
</div>
</div>`;
  userChoice = "rock";
  return checkWinner(userChoice, compChoice);
}
rock.addEventListener("click", humanChooseRock);

function humanChoosePaper() {
  parent.innerHTML = `
    <div class="Choices">
<div class="Your-Choice">
  <h2>YOU</h2>
  <img class="human-choice-img" src="paper-emoji.png" alt="" />
</div>

<div class="Computer-Choice">
  <h2>COMPUTER</h2>
  <img class="computer-choice-img" src="${compChoice}-emoji.png" alt="" />
</div>
</div>`;
  userChoice = "paper";
  return checkWinner(userChoice, compChoice);
}

paper.addEventListener("click", humanChoosePaper);

function humanChooseScissors() {
  parent.innerHTML = `
      <div class="Choices">
  <div class="Your-Choice">
    <h2>YOU</h2>
    <img class="human-choice-img" src="scissors-emoji.png" alt="" />
  </div>
  
  <div class="Computer-Choice">
    <h2>COMPUTER</h2>
    <img class="computer-choice-img" src="${compChoice}-emoji.png" alt="" />
  </div>
  </div>`;
  userChoice = "scissors";
  return checkWinner(userChoice, compChoice);
}

scissors.addEventListener("click", humanChooseScissors);

let winCount = 0;
let loseCount = 0;
let drawCount = 0;

function checkWinner(human, computer) {
  if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    result.innerHTML = "YOU WIN";
    win.innerHTML = `${++winCount}`;
  } else if (
    (human === "rock" && computer === "paper") ||
    (human === "paper" && computer === "scissors") ||
    (human === "scissors" && computer === "rock")
  ) {
    result.innerHTML = "YOU LOSE";
    lose.innerHTML = `${++loseCount}`;
  } else {
    result.innerHTML = "IT'S A DRAW";
    draw.innerHTML = `${++drawCount}`;
  }
}

// RESET GAME
function resetGame() {
  winCount = 0;
  loseCount = 0;
  drawCount = 0;
  win.innerHTML = 0;
  lose.innerHTML = 0;
  draw.innerHTML = 0;
  result.innerHTML = "";
  parent.innerHTML = "";
}

button.addEventListener("click", resetGame);
