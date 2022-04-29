const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
 let dnsMap = new Map();

 for (let i = 0; i < domains.length; i++) {
   let curr = domains[i].split('.'); // [ 'code', 'yandex', 'ru' ]
   let currDomain = '';
   
   for (let j = curr.length - 1; j >= 0; j--) { // from the last to first;
    currDomain = `${currDomain}.${curr[j]}`
    // console.log(i, j, currDomain, curr)

    if (dnsMap.has(currDomain)) {
      dnsMap.set(currDomain, dnsMap.get(currDomain) + 1)
    } else {
      dnsMap.set(currDomain, 1)
    }

    if (j === 0) currDomain = ''; // reset this array domains to check next array;
   }
 }

 return Object.fromEntries(dnsMap);
}

module.exports = {
  getDNSStats
};
