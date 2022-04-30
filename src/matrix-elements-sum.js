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
  if (!matrix) return 0;

  const rows = matrix.length;
  const columns = matrix[0].length

  let counter = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let curr = matrix[i][j]
  
      if (i === 0) { // first row cant be below 0; just count numbers
        counter += curr;
      } else { // check if not below 0
        if (!belowZero(matrix, i, j)) counter += curr;
      }
    }
  }

  return counter;
}

const belowZero = (matrix, i, j) => {
  let checkIfZero = matrix[i - 1][j]
  return checkIfZero === 0;
}

module.exports = {
  getMatrixElementsSum
};
