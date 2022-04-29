const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1.length === 0 || s2.length === 0) return 0;

  let map1 = new Map();

  for (let i = 0; i < s1.length; i++) {
    let curr = s1.charAt(i);
    if (map1.has(curr)) {
      map1.set(curr, map1.get(curr) + 1)
    } else {
      map1.set(curr, 1);
    }
  }

  let counter = 0;

  for (let i = 0; i < s2.length; i++) {
    let curr = s2.charAt(i);
    if (map1.has(curr)) {
      counter++;
      map1.set(curr, map1.get(curr) - 1)

      if (map1.get(curr) === 0) map1.delete(curr);
    } 
  }

  return counter;
}

module.exports = {
  getCommonCharacterCount
};

getCommonCharacterCount("aabcc", "adcaa")