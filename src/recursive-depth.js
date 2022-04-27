const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, level = 1) {
    let depth = level;
    for (let i = 0; i < arr.length; i++) {
      let curr = arr[i];
      if (Array.isArray(curr)) {

        let subDepth = this.calculateDepth(curr, level + 1);
        if (subDepth > depth) {
          depth = subDepth;
        }
      }
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator,
};
