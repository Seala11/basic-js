const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 *  * transform([1, 2, 3, '--double-prev', 4, 5]) => [1, 2, 3, 3, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *  * transform([1, 2, 3, '--discard-next', 4, 5]) => [1, 2, 3, 5]
 *
 */

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  if (arr.length === 0) return arr;

  let result = [];
  let pointer = 0

  while (pointer < arr.length) {
    let currNumber = arr[pointer];
    
    if (currNumber === '--discard-next') {
      pointer++;

    } else if (currNumber === '--discard-prev') { // ['--discard-prev', 1, 2, 3],
      if (result[pointer - 1] !== undefined) result.pop();

    } else if (currNumber === '--double-next') {
      pointer += 1;

      if (arr[pointer] !== undefined) { // if such number exists
        result.push(arr[pointer]);
        result.push(arr[pointer]);
      }

    } else if (currNumber === '--double-prev') { // [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5], =>  [ 1, 2, 3, 4, 5 ]
      if (result[pointer - 1] !== undefined) {
        
      let prevRes = result[pointer - 1];
      let prevArr = arr[pointer - 1];

      if (prevRes === prevArr) {
        result.push(prevRes)
      }
      }

    } else {
      result.push(currNumber);
    }

    pointer++;
  }

  return result;
}

module.exports = {
  transform,
};
