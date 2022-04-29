const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let map = new Map();
  let uniqueNames = [];

  for (let i = 0; i < names.length; i++) {
    let curr = names[i];

    // if such name already exist
    if (map.has(curr)) {
      let int = map.get(curr); // get the numbers of such files that we found

      // find new not repated name
      let unique = false;
      while (!unique) {
        // set new file name
        let name = `${curr}(${int})`;
        if (!map.has(name)) { // if it s unique save else keep looking
          curr = name;
          unique = true;
        } else {
          int++;
        }
      }

      uniqueNames.push(curr);
      // update map => add to number of times we found that file
      map.set(curr, 1);
    } else {
      uniqueNames.push(curr);

      // update map
      map.set(curr, 1);
    }
  }

  console.log(uniqueNames);
  return uniqueNames;
}

module.exports = {
  renameFiles,
};

renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']);
// ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']
