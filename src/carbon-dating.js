const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let sampleNumber = +sampleActivity;
  let result;
  if (isNaN(+sampleNumber) || sampleNumber <= 0 || sampleNumber > 15 || typeof sampleActivity !== 'string' || !isFinite(sampleNumber)) {
    console.log('false');
    return false;
  }

  // the rate constant for the reaction from its half-life (5730 yr) 
  let k = 0.693 / HALF_LIFE_PERIOD;

  result = Math.ceil(Math.log((MODERN_ACTIVITY / sampleNumber)) / k)

  return result;
}

module.exports = {
  dateSample,
};

// dateSample(3);
// dateSample(' \n\t\r')
