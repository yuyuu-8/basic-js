const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Iterate through each column
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      // If the current element is below a 0, skip it
      if (row > 0 && matrix[row - 1][col] === 0) {
        continue;
      }
      // Add the current element to the sum
      sum += matrix[row][col];
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
