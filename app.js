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
clearBoard(gameState);

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
//
// update game state and UI (since handleSquareClick already validated the move)
function handleMove(clickedSquare, clickedSquareIndex) {
    // adjust game state
    gameState[clickedSquareIndex] = currPlayer;
    // adjust ui
    clickedSquare.innerHTML = currPlayer;
}

// switch turns for the players and update display message accordingly
function handlePlayerChange() {
    if (currPlayer === "X") {
        currPlayer = "O";
    }
    else {
        currPlayer = "X";
    }

    // we can also use a ternary operator to shrink down the above logic:
    // currPlayer = currPlayer == "X" ? "O" : "X"

    statusDisplay.innerHTML = currTurnMessage();
}

    // define all possible win states as an array of arrays
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    /*
        0 1 2
        3 4 5
        6 7 8
    */

// check for win, draw, or game continuation
function handleGameValidation() {
    let roundWon = false;

    // check game state for a win
    //  - hardcode length of the winning states array
    for (let i = 0; i < 8; i++) {
        const winCond = winConditions[i];

        // check if all squares in a line are the same => indicates a win
        let uno = gameState[winCond[0]];
        let dos = gameState[winCond[1]];
        let tres = gameState[winCond[2]];
        if (uno === "" || dos === "" || tres === "") {
            continue
        }
        if (uno === dos && dos === tres) {
            roundWon = true;
            break
        }
    }

    // outcome if there's a winner
    if (roundWon) {
        statusDisplay.innerHTML = winMessage();
        gameActive = false;
        return;
    }

    // outcome if there's a draw
    if (!gameState.includes("")) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    // then the game has not yet ended -- its the other player's turn now!
    handlePlayerChange();
}

// check if the square is occupied and proceed accordingly
function handleSquareClick(clickedSquareEvent) {
    // store the clicked html element where the event occured
    const clickedSquare = clickedSquareEvent.target;

    // get the "data-square-index" attribute from the click event so 
    // we know which square was clicked.
    // note that getAttribute returns a str -- so we parse into an int
    const clickedSquareIndex = parseInt(clickedSquare.getAttribute("data-square-index"));

    // check if square is occupied and whether game is paused -- if either
    // is true we ignore the click by returning early
    if (gameState[clickedSquareIndex] !== "" || !gameActive) {
        return;
    }

    // otherwise proceed with updates to game state
    handleMove(clickedSquare, clickedSquareIndex);
    handleGameValidation();
}

// reset the game to default after its conclusion
function handleGameReset() {
    gameActive = true;
    currPlayer = "X";    /* later we can randomize this, switch players, etc*/
    clearBoard(gameState);
    statusDisplay.innerHTML = currTurnMessage();
    document.querySelectorAll(".square").forEach(square => square.innerHTML = "");
}

// Utility functions
//
// initializes / sets the board to default
function clearBoard(arr) {
    for (let i = 0; i < 9; i++) {
        arr[i] = "";
    }
}

// Event listeners for squares and reset button
document.querySelectorAll(".square").forEach(square => square.addEventListener("click", handleSquareClick));
document.querySelector("game--reset").addEventListener("click", handleGameReset);