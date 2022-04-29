const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const res = { turns: 0, seconds: 0 };

  const countMoves = (times) => {
    // source  aux  dest
    //    a     b    c
    // Step 1 − Move n-1 disks from A to B using C
    // Step 2 − Move nth disk from A to C
    // Step 3 − Move n-1 disks from B to C using A

    // countMoves(n-1) + 1 + countMoves(n-1) = 2 * countMoves(times - 1) + 1

    if (times > 0) {
      return 2 * countMoves(times - 1) + 1;
    } else {
      return 0;
    }
  };

  res.turns = countMoves(disksNumber);
  res.seconds = Math.floor((res.turns / turnsSpeed) * 3600); // turn hours to sec;

  return res;
}

module.exports = {
  calculateHanoi,
};

// calculateHanoi(9, 4308);
