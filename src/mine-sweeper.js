const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const result = new Array(rows);
  for (let i = 0; i < rows; i++) {
    result[i] = new Array(cols).fill(0);
  }

  const directions = [
    [-1, -1], [-1, 0], [-1, 1], // Top row
    [0, -1],          [0, 1],   // Middle row
    [1, -1],  [1, 0], [1, 1]    // Bottom row
  ];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j]) {
        for (const [dx, dy] of directions) {
          const x = i + dx;
          const y = j + dy;

          if (x >= 0 && x < rows && y >= 0 && y < cols) {
            result[x][y]++;
          }
        }
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
