const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // edge case
  if (str.length === 0) return str;

  let encodedStr = '';
  let counter = 0;
  let char = str.charAt(0);

  for (let i = 0; i < str.length; i++) {
    let currChar = str.charAt(i);
    if (currChar === char) { // if letters repeate keep counting
      counter++ 
    } else { // if it the different letter; add char and counter to encoded str
      encodedStr = `${encodedStr}${counter === 1 ? '' : counter}${char}` // if counter is 1 no number needed
      counter = 1;
      char = currChar;
    }

    // last letters
    if (i === str.length - 1 && counter > 0) {
      encodedStr = `${encodedStr}${counter === 1 ? '' : counter}${char}`
      counter = 0;
      char = currChar;
    }
  }

  return encodedStr;
}

module.exports = {
  encodeLine
};


// encodeLine('aabbbc');