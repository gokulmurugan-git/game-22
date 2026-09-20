/* ============================================
   GAME VARIABLES AND STATE
   ============================================ */

// The game board: array of 9 cells (indices 0-8)
// Each cell can be empty (''), contain 'X', or contain 'O'
let board = ['', '', '', '', '', '', '', '', ''];

// Current player: starts with 'X'
let currentPlayer = 'X';

// Game status: 'playing', 'won', or 'draw'
let gameStatus = 'playing';

// Score tracking
let scores = {
    x: 0,  // Number of wins for X
    o: 0,  // Number of wins for O
    draw: 0  // Number of draws
};

/* ============================================
   WINNING COMBINATIONS
   ============================================ */

// All possible winning combinations (rows, columns, diagonals)
// Each combination is an array of 3 cell indices
const winningCombinations = [
    // Rows
    [0, 1, 2],  // Top row
    [3, 4, 5],  // Middle row
    [6, 7, 8],  // Bottom row
    // Columns
    [0, 3, 6],  // Left column
    [1, 4, 7],  // Middle column
    [2, 5, 8],  // Right column
    // Diagonals
    [0, 4, 8],  // Top-left to bottom-right
    [2, 4, 6]   // Top-right to bottom-left
];

/* ============================================
   DOM ELEMENTS
   ============================================ */

// Get all cells
const cells = document.querySelectorAll('.cell');

// Get UI elements for messages and updates
const currentPlayerDisplay = document.getElementById('currentPlayer');
const statusMessage = document.getElementById('statusMessage');
const newGameBtn = document.getElementById('newGameBtn');
const turnMessage = document.getElementById('turnMessage');

// Score display elements
const xWinsDisplay = document.getElementById('xWins');
const oWinsDisplay = document.getElementById('oWins');
const drawsDisplay = document.getElementById('draws');

/* ============================================
   INITIALIZATION - RUN WHEN PAGE LOADS
   ============================================ */

// Load saved scores from browser memory (localStorage)
function loadScores() {
    const savedScores = localStorage.getItem('xoGameScores');
    if (savedScores) {
        scores = JSON.parse(savedScores);
        updateScoreDisplay();
    }
}

// Initialize the game when the page loads
window.addEventListener('DOMContentLoaded', function() {
    loadScores();
    setupGame();
});

/* ============================================
   SETUP GAME
   ============================================ */

function setupGame() {
    // Add click event listener to each cell
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });

    // Add click event listener to the New Game button
    newGameBtn.addEventListener('click', newGame);

    // Update the display
    updateDisplay();
}

/* ============================================
   HANDLE CELL CLICK
   ============================================ */

function handleCellClick(event) {
    // Get the cell that was clicked
    const cell = event.target;
    
    // Get the index of the cell (0-8)
    const index = cell.getAttribute('data-index');

    // If the game is not playing, do nothing
    if (gameStatus !== 'playing') {
        return;
    }

    // If the cell is already occupied, do nothing
    if (board[index] !== '') {
        return;
    }

    // Place the current player's symbol in the cell
    board[index] = currentPlayer;

    // Mark the cell as occupied visually
    cell.textContent = currentPlayer;
    cell.classList.add('occupied');
    cell.classList.add(currentPlayer.toLowerCase());

    // Check if the current player has won
    if (checkWin(currentPlayer)) {
        gameStatus = 'won';
        statusMessage.textContent = `Player ${currentPlayer} Wins! 🎉`;
        statusMessage.classList.add(`winner-${currentPlayer.toLowerCase()}`);
        highlightWinningCells(currentPlayer);
        updateScore(currentPlayer);
        return;
    }

    // Check if the game is a draw
    if (checkDraw()) {
        gameStatus = 'draw';
        statusMessage.textContent = "It's a Draw! 🤝";
        statusMessage.classList.add('draw');
        scores.draw++;
        saveScores();
        updateScoreDisplay();
        return;
    }

    // Switch to the other player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    // Update the display with the new current player
    updateDisplay();
}

/* ============================================
   CHECK WIN FUNCTION
   ============================================ */

function checkWin(player) {
    // Loop through all winning combinations
    for (let combination of winningCombinations) {
        // Get the three indices
        const [a, b, c] = combination;

        // Check if all three cells contain the same player's symbol
        if (board[a] === player && board[b] === player && board[c] === player) {
            // Player has won!
            return true;
        }
    }

    // No winning combination found
    return false;
}

/* ============================================
   HIGHLIGHT WINNING CELLS
   ============================================ */

function highlightWinningCells(player) {
    // Loop through all winning combinations
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;

        // Check if this is a winning combination
        if (board[a] === player && board[b] === player && board[c] === player) {
            // Highlight the winning cells
            cells[a].classList.add('winner');
            cells[b].classList.add('winner');
            cells[c].classList.add('winner');
            return;
        }
    }
}

/* ============================================
   CHECK DRAW FUNCTION
   ============================================ */

function checkDraw() {
    // A draw happens when:
    // 1. All cells are filled (no empty strings in board)
    // 2. No player has won

    // Check if all cells are filled
    const boardFull = board.every(cell => cell !== '');

    // If board is full and no one has won, it's a draw
    if (boardFull) {
        return true;
    }

    return false;
}

/* ============================================
   UPDATE SCORE
   ============================================ */

function updateScore(player) {
    if (player === 'X') {
        scores.x++;
    } else if (player === 'O') {
        scores.o++;
    }

    // Save scores to browser memory
    saveScores();

    // Update the score display
    updateScoreDisplay();
}

/* ============================================
   SAVE SCORES TO LOCAL STORAGE
   ============================================ */

function saveScores() {
    localStorage.setItem('xoGameScores', JSON.stringify(scores));
}

/* ============================================
   UPDATE SCORE DISPLAY
   ============================================ */

function updateScoreDisplay() {
    xWinsDisplay.textContent = scores.x;
    oWinsDisplay.textContent = scores.o;
    drawsDisplay.textContent = scores.draw;
}

/* ============================================
   UPDATE DISPLAY (TURN INFO)
   ============================================ */

function updateDisplay() {
    currentPlayerDisplay.textContent = currentPlayer;
    turnMessage.textContent = `Player ${currentPlayer}'s Turn`;
}

/* ============================================
   NEW GAME FUNCTION
   ============================================ */

function newGame() {
    // Reset the board
    board = ['', '', '', '', '', '', '', '', ''];

    // Reset game status
    gameStatus = 'playing';

    // Reset current player to 'X'
    currentPlayer = 'X';

    // Clear all cell content and styling
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('occupied', 'x', 'o', 'winner');
    });

    // Clear status message
    statusMessage.textContent = '';
    statusMessage.classList.remove('winner-x', 'winner-o', 'draw');

    // Update the display
    updateDisplay();
}

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

// Optional: Function to reset scores (can be called from browser console)
function resetScores() {
    scores = { x: 0, o: 0, draw: 0 };
    saveScores();
    updateScoreDisplay();
    console.log('Scores reset!');
}

// Optional: Function to see the current board state (helpful for debugging)
function printBoard() {
    console.log('Current Board:');
    console.log(board[0], '|', board[1], '|', board[2]);
    console.log('---------');
    console.log(board[3], '|', board[4], '|', board[5]);
    console.log('---------');
    console.log(board[6], '|', board[7], '|', board[8]);
}
