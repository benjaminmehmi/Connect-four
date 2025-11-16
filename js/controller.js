function dropPiece(columnIndex) {
    if (turn < 0) return -1;
    let rowIndex = -1;
    
    for (let currentRow = 5; currentRow >= 0; currentRow--) {
        let index = getBoardIndex(columnIndex, currentRow);
        if (index !== -1 && board[index] === 0) {
            board[index] = turn;
            rowIndex = currentRow;
            break;
        }
    }
    if (rowIndex !== -1) {
        if (hasWon()) {

        } else {
            if (board.every(cell => cell !== 0)) {
                turn = 0;
            } else {
                turn = 3 - turn;
            }
        }
        updateView();
    }
    return rowIndex;
}

function hasWon() {
    let currentPlayer = turn;

    // Check for 4 in a row horizontally
    for (let currentRow = 0; currentRow < rowCount; currentRow++) {
        for (let currentCol = 0; currentCol <= colCount - 4; currentCol++) {
            const index = getBoardIndex(currentCol, currentRow);
            if (board[index] === currentPlayer &&
                board[getBoardIndex(currentCol + 1, currentRow)] === currentPlayer &&
                board[getBoardIndex(currentCol + 2, currentRow)] === currentPlayer &&
                board[getBoardIndex(currentCol + 3, currentRow)] === currentPlayer) {
                turn = -currentPlayer;
                return true;
            }
        }
    }

    // Check for 4 in a row vertically
    for (let currentCol = 0; currentCol < colCount; currentCol++) {
        for (let currentRow = 0; currentRow <= rowCount - 4; currentRow++) {
            const index = getBoardIndex(currentCol, currentRow);
            if (board[index] === currentPlayer &&
                board[getBoardIndex(currentCol, currentRow + 1)] === currentPlayer &&
                board[getBoardIndex(currentCol, currentRow + 2)] === currentPlayer &&
                board[getBoardIndex(currentCol, currentRow + 3)] === currentPlayer) {
                turn = -currentPlayer;
                return true;
            }
        }
    }

    // Check for 4 in a row diagonally
    for (let currentCol = 0; currentCol < colCount - 4; currentCol++) {
        for (let currentRow = 4; currentRow <= rowCount; currentRow++) {
            const index = getBoardIndex(currentCol, currentRow);
            if (board[index] === currentPlayer &&
                board[getBoardIndex(currentCol + 1, currentRow - 1)] === currentPlayer &&
                board[getBoardIndex(currentCol + 2, currentRow - 2)] === currentPlayer &&
                board[getBoardIndex(currentCol + 3, currentRow - 3)] === currentPlayer) {
                turn = -currentPlayer;
                return true;
            }
        }
    }

    // Check for 4 in a row anti-diagonally
    for (let currentCol = 0; currentCol < colCount; currentCol++) {
        for (let currentRow = 0; currentRow <= rowCount - 4; currentRow++) {
            const index = getBoardIndex(currentCol, currentRow);
            if (board[index] === currentPlayer &&
                board[getBoardIndex(currentCol + 1, currentRow + 1)] === currentPlayer &&
                board[getBoardIndex(currentCol + 2, currentRow + 2)] === currentPlayer &&
                board[getBoardIndex(currentCol + 3, currentRow + 3)] === currentPlayer) {
                turn = -currentPlayer;
                return true;
            }
        }
    }

    return false;
}

function newGame() {
    board = createBoard();
    turn = 1;
    updateView();
}

function newGameButton() {
    let html = ` <button class="newGameBtn" onclick="newGame()">Start over</button>`;
    return html;
}

