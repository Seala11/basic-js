const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 * deleteDigit(222219), 22229
 *
 */
function deleteDigit(n) {
  let num = Math.abs(n); // in case negative num

  if (num <= 9) return n; // only one digit;

  if (num.toString().length === 2) { // if only 2 digits compare them;
    let first = +num.toString().charAt(0);
    let second = +num.toString().charAt(1);
    return Math.max(first, second)
  }  

  // num has more than 2 digits
  let max = -Infinity;
  const length = n.toString().length; // get the length
  let fromIndex = 0;
  let toIndex = 1;

  // cut one by one and compare
  while (toIndex < length) {
    let str = num.toString();
    let curr = str.substring(0, fromIndex) + str.substring(toIndex);
    console.log(curr);
    max = Math.max(+curr, +max);
    fromIndex++;
    toIndex++;
  }

  return max;
}

module.exports = {
  deleteDigit,
};


// deleteDigit(90)