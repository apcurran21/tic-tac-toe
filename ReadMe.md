# Tic Tac Toe project

Hi! this is just a small project to give me more experience coding in JavaScript, HTML, and CSS.

(I want a solid base in javascript before beginning to use react)

## Planning

### Specifications
* two-person game, players place their X and O pieces using the mouse
* the mouse can only place pieces of one type down at a time, and X's / O's alternate
* the game randomly decides who goes first and stores that info for later use
* the nine squares of the board show display the current state of the game
* the current player's turn is displayed
* players can only place pieces on unoccupied squares
* End of the game:
    * if X's get three in a row, a winner message is displayed
    * if O's get three in a row, a winner message is displayed
    * if all 9 squares are filled without any in a row, a draw message is displayed
    * there is the option to reset the game - this does the following:
        * clears the board
        * gives the first turn to whoever didn't start the previous game

### Functionality
The program needs to do the following:
* track clicks on the squares
* check if a valid move has been made
    * ie nothing happens if the player clicks on an occupied square
* update and validate game state after a valid move
    * ie after storing a player's move, needs to check for winners or a draw
* display current game state
    * if the games ends, display appropriate message and offer opportunity to restart
    * if the game doesn't end, display the updated board and player turn
