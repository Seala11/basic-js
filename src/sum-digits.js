const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (n === 0) return 0;
    
  let num = Math.abs(n); // in case negative num
  let result = 0;
  
  while (num > 0) {
      let lastNumber = num % 10
      result = result + lastNumber
      num = parseInt(num / 10)
  }

  return result > 9 ? getSumOfDigits(result) : result; // more than 1 digit - recurtion
}

module.exports = {
  getSumOfDigits
};
