// model
const colCount = 7;
const rowCount = 6;
let turn = 1; // 1 = player 1
              // 2 = player 2
              // 0 = game over, no one has won
              // -1 = game over, player 1 has won
              // -2 = game over, player 2 has won
let board = [
    0, 0, 0, 0, 0, 0, 0, // top row
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 0, 2, 0, 0, // bottom row
];
