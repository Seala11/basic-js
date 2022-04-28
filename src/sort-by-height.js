const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let numbersArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      numbersArr.push(arr[i]);
    }
  }

  if (numbersArr.length === 0) return arr; // if all numbers are -1

  numbersArr = numbersArr.sort((a, b) => a - b);

  if (numbersArr.length === arr.length) return numbersArr // if all numbers without -1 return sorted arr

  let result = [];
  let pointer = 0;
  let deletedCount = 0;

  while (pointer < arr.length) {
    if (arr[pointer] === -1) {
      if (deletedCount > 0) {
        let chunk = numbersArr.splice(0, deletedCount);
        result = [...result, ...chunk];
        deletedCount = 0;
      }
        result.push(arr[pointer]);
      } else {
      deletedCount += 1;
    }

    if (pointer === arr.length - 1 && deletedCount > 0) {
      let chunk = numbersArr.splice(0, deletedCount);
      result = [...result, ...chunk];
    }

    pointer++;
  }

  return result;
}

module.exports = {
  sortByHeight,
};

// sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]);
// sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])
