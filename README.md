# X-O Game (Tic-Tac-Toe)

A simple, clean, and beginner-friendly Tic-Tac-Toe game built with vanilla HTML, CSS, and JavaScript.

![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-Complete-brightgreen)

---

## About

The **X-O Game** is a classic two-player Tic-Tac-Toe game where players take turns marking spaces on a 3×3 grid. The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins. If all cells are filled and no player has won, the game ends in a draw.

This project is perfect for beginners learning web development. It demonstrates fundamental concepts like:
- DOM manipulation
- Event handling
- Game logic
- State management
- Local storage (score persistence)
- Responsive design

---

## Features

✨ **Core Game Features:**
- ✅ 3×3 game board with interactive cells
- ✅ Two-player gameplay (X and O)
- ✅ Automatic turn switching
- ✅ Win detection (rows, columns, diagonals)
- ✅ Draw detection
- ✅ Display current player's turn
- ✅ Display game status (winner or draw)
- ✅ Winning cells highlight
- ✅ New Game button to reset the board

📊 **Score Tracking:**
- ✅ Track X wins
- ✅ Track O wins
- ✅ Track draws
- ✅ Persistent score storage (scores saved in browser)

🎨 **User Interface:**
- ✅ Clean, modern design
- ✅ Gradient backgrounds
- ✅ Smooth animations and transitions
- ✅ Hover effects on cells
- ✅ Responsive design (mobile & desktop)
- ✅ Professional color scheme

---

## Technologies

- **HTML5** - Page structure
- **CSS3** - Styling and responsive layout
- **JavaScript (Vanilla)** - Game logic and interactivity
- **No external libraries or frameworks** - Pure vanilla implementation

---

## How to Run

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (optional, for viewing/editing code)

### Steps to Run Locally

1. **Download or Clone the Project**
   ```bash
   git clone https://github.com/YOUR_USERNAME/x-o-game.git
   cd x-o-game
   ```

2. **Open the Game**
   - Locate the `index.html` file in the project folder
   - Double-click on `index.html` to open it in your default browser
   - OR right-click → Open with → Select your preferred browser

3. **Play the Game!**
   - The game will load and be ready to play immediately
   - No installation or setup needed!

### File Structure
```
x-o-game/
│
├── index.html      # HTML structure
├── style.css       # Styling and responsive design
├── script.js       # Game logic and interactivity
└── README.md       # This file
```

---

## How to Play

### Rules
1. **Objective:** Get three of your symbols (X or O) in a row to win
2. **Players:** Two players play on the same device
   - Player 1 always plays as **X**
   - Player 2 always plays as **O**
3. **Turns:** Players alternate turns, starting with Player 1 (X)
4. **Winning:** A player wins by getting three of their symbols in a row:
   - Horizontally (across a row)
   - Vertically (down a column)
   - Diagonally (corner to corner)
5. **Draw:** If all 9 cells are filled and no player has won, the game is a draw

### Game Board Layout
```
 0 | 1 | 2
-----------
 3 | 4 | 5
-----------
 6 | 7 | 8
```

### Step-by-Step Gameplay
1. **Start:** The game begins with Player X's turn
2. **Make a Move:** Click any empty cell to place your symbol
3. **Alternate:** Player O then clicks an empty cell
4. **Check Win:** The game automatically checks for a winner after each move
5. **Winning:** If you get three in a row, you win! 🎉
6. **Draw:** If the board fills up with no winner, it's a draw
7. **New Game:** Click the "New Game" button to play again
8. **Score Tracking:** Your wins and draws are tracked and displayed

### Example Game
```
Game Start (X's turn):
  |   |  
---------
  | X |  
---------
  |   |  

After O's move:
  |   | O
---------
  | X |  
---------
  |   |  

And so on...
```

---

## Code Explanation

### How the 3×3 Board Works
- The board is stored as an **array with 9 elements** (indices 0-8)
- Each index represents a cell:
  - Indices 0-2: Top row
  - Indices 3-5: Middle row
  - Indices 6-8: Bottom row
- Initially, all cells are empty strings (`''`)
- When a player clicks, the cell is filled with `'X'` or `'O'`

### How X and O Turns Are Handled
- A variable `currentPlayer` tracks whose turn it is (starts with `'X'`)
- After each valid move, we check for a win or draw
- If the game hasn't ended, we switch players:
  ```javascript
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  ```
- The turn display updates to show the current player

### How Winning Combinations Are Checked
- We have an array `winningCombinations` with 8 possible ways to win:
  - 3 horizontal rows: [0,1,2], [3,4,5], [6,7,8]
  - 3 vertical columns: [0,3,6], [1,4,7], [2,5,8]
  - 2 diagonals: [0,4,8], [2,4,6]
- After each move, we check if the current player's symbol matches all three positions in any winning combination
- If a match is found, the player wins!

### How Draw Is Detected
- A draw occurs when:
  1. All 9 cells are filled (no empty spaces)
  2. No player has won
- We check this after every move

### How Score Is Updated
- When a player wins, their score increases by 1
- When a draw occurs, the draw count increases by 1
- Scores are saved using **localStorage** (browser's built-in storage)
- Scores persist even after closing the browser!

### How the New Game Button Works
1. Resets the `board` array to all empty strings
2. Resets `gameStatus` to `'playing'`
3. Resets `currentPlayer` back to `'X'`
4. Clears all cell content and styling
5. Clears the status message
6. Updates the display to show X's turn
7. **Keeps the score intact** (only clears the board)

### How HTML, CSS, and JavaScript Work Together

**HTML (Structure):**
- Creates the page layout with cells, buttons, and text elements
- Assigns each cell a unique `data-index` (0-8) for identification
- Provides IDs for JavaScript to find and update elements

**CSS (Styling):**
- Makes the page look beautiful with colors, gradients, and shadows
- Creates the 3×3 grid layout using CSS Grid
- Adds animations and hover effects for better UX
- Makes the page responsive for mobile and desktop screens

**JavaScript (Logic):**
- Listens for clicks on cells and the New Game button
- Updates the `board` array when a cell is clicked
- Checks for wins and draws after each move
- Updates the HTML display to show game status, current turn, and scores
- Manages the game flow and rules

**Communication:**
- JavaScript changes the HTML content (using `textContent`, `classList`)
- CSS automatically applies styles to the changed HTML
- This creates an interactive, responsive game experience

---

## Future Improvements

Here are some ideas to enhance the game further:

### Easy Improvements (Beginner Level)
1. **Single Player Mode**
   - Add a computer opponent using AI
   - Difficulty levels: Easy (random moves), Hard (optimal moves)

2. **Visual Enhancements**
   - Add animations when symbols appear
   - Add confetti effect when someone wins
   - Add sound effects for clicks and wins

3. **Game Customization**
   - Let players choose their names
   - Display player names instead of "Player X"
   - Add emoji customization (😂 vs 🎃 instead of X and O)

### Intermediate Improvements
4. **Game Features**
   - Undo move feature
   - Game history/replay
   - Keyboard controls (arrow keys + Enter)

5. **Statistics**
   - Win streak tracking
   - Win percentage calculation
   - Game duration timer

### Advanced Improvements
6. **Multiplayer Online**
   - Play with friends online (using WebSockets)
   - Lobby system to create/join games
   - Chat feature during games

7. **Backend Integration**
   - Save game history to a server
   - Leaderboard with top players
   - User accounts and authentication

---

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Tips for Beginners

### Learning from This Project

1. **Read the Code**
   - Start with `index.html` to understand the structure
   - Then read `style.css` to see how styling works
   - Finally, read `script.js` to understand the game logic

2. **Experiment**
   - Open the browser console (F12) and try these:
     - `printBoard()` - See the board state
     - `resetScores()` - Clear all scores
     - `board` - View the board array
     - `scores` - View the score object

3. **Modify the Code**
   - Change colors in `style.css`
   - Change winning messages in `script.js`
   - Add new features from the Future Improvements section

4. **Use Browser DevTools**
   - Press F12 to open Developer Tools
   - Use the Console tab to debug
   - Use the Elements tab to inspect HTML/CSS

---

## Troubleshooting

### Game doesn't load?
- Make sure all three files (`index.html`, `style.css`, `script.js`) are in the same folder
- Try a different browser
- Clear browser cache and refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Scores not saving?
- Check if localStorage is enabled in your browser
- Private/Incognito mode may not save data
- Try a different browser

### Styling looks broken?
- Make sure `style.css` is in the same folder as `index.html`
- Reload the page (Ctrl+R or Cmd+R)
- Check browser console for errors (F12)

### Cells not responding to clicks?
- Make sure `script.js` is in the same folder as `index.html`
- Reload the page
- Check browser console for errors (F12)
- Try a different browser

---

## License

This project is open source and available under the **MIT License**. You're free to use, modify, and distribute this code.

---

## Author

Created as a beginner-friendly Tic-Tac-Toe game portfolio project.

---

## Support

If you have questions or run into issues:
1. Check the Troubleshooting section
2. Review the code comments
3. Test in a different browser
4. Check browser console for error messages (F12)

---

## Have Fun! 🎮

Enjoy playing X-O Game and learning web development!

If you build this project, consider:
- ⭐ Starring this repository
- 🔗 Sharing with friends
- 📝 Adding your own improvements
- 👥 Contributing back improvements

Happy coding! 💻
