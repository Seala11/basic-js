const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // 1. loop through the arr
  // - get all 1 index val from strings only
  // 2. loop again sort and join

  if (!members) return false;

  let result = [];

  for (let i = 0; i < members.length; i++) {
    let curr = members[i];
    if (typeof curr === 'string') {
      curr = curr.trim()
      result.push(curr.charAt(0).toUpperCase())
    }
  };

  return result.sort().join('');
}

module.exports = {
  createDreamTeam
};
