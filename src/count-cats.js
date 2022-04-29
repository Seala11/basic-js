const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  if (matrix.length === 0) return 0; // empty matrix - no cats

  let rows = matrix.length;
  let columns = matrix[0].length;

  if (rows === 0) return 0; // empty rows - no cats

  let counter = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === '^^') {
        counter++;
      }
    }
  }

  return counter;
}

module.exports = {
  countCats
};
