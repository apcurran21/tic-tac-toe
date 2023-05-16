// Store game status elements:
//  - the document method querySelector() returns the first Element within
//    the doc that matches the given selector - return null otherwise
const statusDisplay = document.querySelector(".game--status");

// Declarations for gamestate-tracking variables
//  - javascript note: if we think that the value of a variable can change,
//    then use the "let" keyword for declaration
let gameActive = true;
let currPlayer = "X";
// store the state of the game in an array of size 9
let gameState = [];
for (let i = 0; i < 9; i++) {
    gameState[i] = "";
}

// Creating messages for display during gameplay
//  - since these messages are dynamic and can change based on the current 
//    state, we define them as functions
//  - more specifically, arrow functions: from the documentation, 
//     - an arrow function espression is a compact alternative to a
//       traditional function expression
const winMessage = () => "Congrats! ${currPlayer} won!";
const drawMessage = () => "It's a draw ...";
const currTurnMessage = () => "It's ${currPlayer}'s turn.";

// Set an initial message to indicate the player's first turn
//  - later we can randomize this
statusDisplay.innerHTML = currTurnMessage();

// Game state functions
function handleMove() {

}

function handlePlayerChange() {

}

function handleGameValidation() {

}

function handleSquareClick() {

}

function handleGameReset() {

}

// Event listeners for squares and reset button
document.querySelectorAll(".square").forEach(square => square.addEventListener("click", handleSquareClick));
document.querySelector("game--reset").addEventListener("click", handleGameReset);