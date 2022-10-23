const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++){
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log("✅✅✅They're the same array.")
  } else {
    console.log("❌❌❌They're different array.")
  }
};

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
console.log(without([1, 2, 3, 4], [1, 2, 3]));
console.log(without([1, 3], [1, 2]));
console.log(without([1, 2, 3, 4], []));