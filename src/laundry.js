/**
 * Laundry Problem
 *
 * @param {number} noOfWashes
 * @param {number[]} cleanPile
 * @param {number[]} dirtyPile
 *
 * @returns {number}
 */
function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
  // sort the clean pile for pairs
  let socksPair = 0;
  let sortedClean = cleanPile.sort();
  let singleClean = []


  while (sortedClean.length > 0) {
    if (sortedClean[0] === sortedClean[1]) {
      socksPair++;
      sortedClean.splice(0, 2);
    } else {                                      // else move single socks to single-clean pile
      singleClean.push(sortedClean[0])
      sortedClean.splice(0, 1)
    }
  }

  // if items in single-clean exist in dirty, increment count and slice considering no of washes
  for (let j = 0; j < dirtyPile.length; j++) {
    if (singleClean.includes(dirtyPile[j]) && noOfWashes > 0) {
      singleClean.splice(singleClean.indexOf(dirtyPile[j]), 1);
      dirtyPile.splice(j, 1);
      socksPair++;
      noOfWashes--;
    }
  }

  // sort the dirty pile for pairs as much as possible
  while (dirtyPile.sort().length > 0 && noOfWashes > 0) {
    if (dirtyPile[0] === dirtyPile[1] && noOfWashes > 0) {
      dirtyPile.splice(0, 2);
      noOfWashes -= 2;
      if (noOfWashes >= 0) socksPair++;
    } else if (dirtyPile[0] !== dirtyPile[1] && noOfWashes > 0) {
      dirtyPile.splice(0, 1);
    }
  }

  return socksPair;
}

module.exports = getMaxPairs;