const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', {
 * repeatTimes: 3,
 * separator: '**',
 * addition: 'PLUS',
 * additionRepeatTimes: 3,
 * additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *  separator default value is '+'. additionSeparator default value is '|'.
 */
function repeater(str, options) {
  // 1. set str + additional str to repeat
  // 2. repeat needed times

  let strToRepeat = str;

  // if there is addition
  if (options.addition || typeof options.addition !== 'undefined') {
    let additionStr = options.addition;
    if (!options.additionRepeatTimes || options.additionRepeatTimes <= 1) {
      // -> no repeat so no separator added
    } else {
      const DEFAULT_SEPARATOR_ADD = '|';

      for (let i = 1; i < options.additionRepeatTimes; i++) {
        additionStr = `${additionStr}${
          options.additionSeparator
            ? options.additionSeparator
            : DEFAULT_SEPARATOR_ADD
        }${options.addition}`;
      }
    }
    strToRepeat = `${str}${additionStr}`;
  }

  // lastly repeat the str
  if (!options.repeatTimes || options.repeatTimes <= 1) {
    // -> no repeat
    return strToRepeat;
  } else {
    const DEFAULT_SEPARATOR_STR = '+';
    let res = strToRepeat;

    for (let i = 1; i < options.repeatTimes; i++) {
      res = `${res}${
        options.separator ? options.separator : DEFAULT_SEPARATOR_STR
      }${strToRepeat}`;
    }

    return res;
  }
}

module.exports = {
  repeater,
};

// const objWithSpecificCoercion = {
//   [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
// };

// repeater(objWithSpecificCoercion, { repeatTimes: 2, addition: objWithSpecificCoercion })
// 'STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT');