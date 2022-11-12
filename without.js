const assertArraysEqual = require('./assertArraysEqual');
  
const without = function(source, itemsToRemove) {
  let finalList = source.slice(0);
  for (let i = 0; i < finalList.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (finalList[i] === itemsToRemove[j]) {
        finalList.splice(i, 1);
      }
    }
  }
  return finalList;
};

//Test code
console.log(without([1, 2, 3], [1, 2, 3]));
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);
console.log(without([1, 2, 3, 4], [1, 2, 3]));
assertArraysEqual(without([1, 2, 3, 4], [1, 2, 3]), [4]);
console.log(without([1, 3], [1, 2]));
assertArraysEqual(without([1, 3], [1, 2]), [3]);
console.log(without([1, 2, 3, 4], []));
assertArraysEqual(without([1, 2, 3, 4], []), [1, 2, 3, 4]);