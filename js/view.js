function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/`
        <h3>${getGameStatus()}</h3>
        <div id="frame">
            ${turn > 0 ? createClickablePieces(turn) : ''}
            <div id="board">
                ${createBoardCells()}
            </div>
        </div>            
    `;
}

function getGameStatus() {
    if (turn >= 1) return 'Player ' + turn + ' \'s turn. Click on a piece!';
    if(turn==0) return 'The game is over. No one won' + newGameButton();
    return `Player ${-turn} won!` + newGameButton();
}

function createClickablePieces() {
    let html = '<div id="controls" class="controls">';
    for (let colIndex = 0; colIndex < colCount; colIndex++) {
        html += /*HTML*/`
            <button 
                class="drop-btn p${turn}" 
                onclick="dropPiece(${colIndex})"
                ></button>`;
    }
    html += `</div>`;
    return html;
}

function createBoardCells() {
    let html = '';
    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
        for (let colIndex = 0; colIndex < colCount; colIndex++) {
            const index = rowIndex * colCount + colIndex;
            const cellValue = board[index]; // 0 = tom, 1 = rød, 2 = gul
            html += `<div class="cell player${cellValue}"></div>`;
        }
    }
    return html;
}