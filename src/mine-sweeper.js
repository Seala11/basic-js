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
  let rows = matrix.length;
  let columns = matrix[0].length;

  if (rows === 0) return matrix;

  // set a new matrix with rows to return
  let newMat = new Array(matrix.length)
  
  for (let i = 0; i < rows; i++) {
      newMat[i] = new Array(columns).fill(0) // set columns of new matrix
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] !== true) {
        newMat[i][j] = bombCount(matrix, i, j)
      } else {
        newMat[i][j] = bombCount(matrix, i, j) - 1; // minus itself
      }
    }
  }

  return newMat;
}

const bombCount = (matrix, i, j) => {
  let count = 0;

  let rows = [matrix[i - 1], matrix[i], matrix[i + 1]] // prev current next rows

  rows.forEach(row => { 
    if (row) { // if there is a bomb near
      if (row[j - 1] === true) count++;
      if (row[j] === true) count++;
      if (row[j + 1] === true) count++;
    }
  })

  return count;
}

module.exports = {
  minesweeper,
};

// const matrix = [
//   [true, false, false],
//   [false, true, false],
//   [false, false, false],
// ];

// minesweeper(matrix);
