let currentPlayer = "X";
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
];

function handleClick(index) {
    if (!gameOver && gameBoard[index] === '') {
        gameBoard[index] = currentPlayer;
        renderBoard();
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWinner() {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameOver = true;
            displayMessage(`Player ${gameBoard[a]} wins!`);
            return;
        }
    }
    if (!gameBoard.includes('')) {
        gameOver = true;
        displayMessage("It's a draw!");
    }
}

function displayMessage(message) {
    document.getElementById("message").textContent = message;
}

function renderBoard() {
    const cells = document.querySelectorAll('.cell');
    gameBoard.forEach((value, index) => {
        cells[index].textContent = value;
    });
}

function resetGame() {
    currentPlayer = "X";
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    displayMessage('');
    renderBoard();
}
