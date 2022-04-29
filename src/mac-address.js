const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  if (!n || n.length !== 17) return false;

  let addressGroup = n.split('-');

  if (addressGroup.length !== 6) return false;

  let isCorrectAddress = true;

  for (let i = 0; i < addressGroup.length; i++) {
    let curr = addressGroup[i]

    // numbers 0 - 9 => 48 - 57; A - F => 65 - 70
    if (
      !(
        between(curr.charCodeAt(0), 48, 57) ||
        between(curr.charCodeAt(0), 65, 70)
      ) || 
      ! (
        between(curr.charCodeAt(1), 48, 57) ||
        between(curr.charCodeAt(1), 65, 70)
      )
    ) {
      isCorrectAddress = false;
      break;
    }
  }

  return isCorrectAddress;
}

const between = (x, min, max) => {
  return x >= min && x <= max;
};

module.exports = {
  isMAC48Address,
};

// isMAC48Address('not a MAC-48 address');
