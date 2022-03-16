//points of each player
let userPoints = 0,
  computerPoints = 0;
//number of games
let nbregames = 0;

let choix = document.querySelector(".choix");
let startbtn = document.getElementById("start");
let state = document.querySelector(".status");
let score_computer = document.querySelector(".score-computer");
let score_user = document.querySelector(".score-user");

//table choice img
let computer_game = document.getElementById("computer-game");
let user_game = document.getElementById("user-game");
computer_game.innerHTML = `<img src="./images/question-mark-pngrepo-com.png" alt="" />`;
user_game.innerHTML = `<img src="./images/question-mark-pngrepo-com.png" alt="" />`;

//start btn click

startbtn.addEventListener("click", function () {
  //init data for new game
  userPoints = 0;
  computerPoints = 0;
  nbregames = 0;
  state.textContent = "Click on Start and make Choice";
  //opacity of choice div and display start btn
  startbtn.style.display = "none";
  choix.style.pointerEvents = "all";
  choix.style.opacity = 1;

  //init score display
  score_user.textContent = userPoints;
  score_computer.textContent = computerPoints;
});

const games = ["rock", "paper", "scissor"];
const url = [
  "rock-pngrepo-com.png",
  "paper-pngrepo-com.png",
  "scissors-pngrepo-com.png",
];

//computer play
function computerPlay() {
  let rand = 0;
  rand = Math.floor(Math.random() * 3) + 1 - 1;
  computer_game.innerHTML = `<img src="./images/${url[rand]}" alt="" />`;
  return games[rand];
}

//play

function userPlay(e) {
  nbregames += 1;

  if (nbregames >= 5) {
    //display end game
    startbtn.style.display = "";
    choix.style.pointerEvents = "none";
    choix.style.opacity = 0.2;

    computer_game.innerHTML = `<img src="./images/question-mark-pngrepo-com.png" alt="" />`;
    user_game.innerHTML = `<img src="./images/question-mark-pngrepo-com.png" alt="" />`;
    state.textContent =
      userPoints > computerPoints
        ? "YOU WIN ALL THE GAME"
        : userPoints < computerPoints
        ? "YOU LOSE ALL THE GAME"
        : "YOU DRAW";
  } else {
    let computerSelection = computerPlay();

    //display choice img
    user_game.innerHTML = `<img src="./images/${url[e.id - 1]}" alt="" />`;
    //display current game status and points
    playRound(games[e.id - 1], computerSelection) == "win"
      ? ((userPoints += 1), (state.textContent = "YOU WIN"))
      : playRound(games[e.id - 1], computerSelection) == "lose"
      ? ((computerPoints += 1), (state.textContent = "YOU LOSE"))
      : (state.textContent = "DRAW");

    score_computer.textContent = computerPoints;
    score_user.textContent = userPoints;
  }
  return "";
}

//function compare the user and computer choice
function playRound(userSelection, computerSelection) {
  if (userSelection == "rock" && computerSelection == "rock") {
    return "draw";
  }
  if (userSelection == "rock" && computerSelection == "paper") {
    return "lose";
  }
  if (userSelection == "rock" && computerSelection == "scissor") {
    return "win";
  }
  if (userSelection == "paper" && computerSelection == "rock") {
    return "win";
  }
  if (userSelection == "paper" && computerSelection == "paper") {
    return "draw";
  }
  if (userSelection == "paper" && computerSelection == "scissor") {
    return "lose";
  }
  if (userSelection == "scissor" && computerSelection == "rock") {
    return "lose";
  }
  if (userSelection == "scissor" && computerSelection == "paper") {
    return "win";
  }
  if (userSelection == "scissor" && computerSelection == "scissor") {
    return "draw";
  }
}
