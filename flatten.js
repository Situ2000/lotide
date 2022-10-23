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

const flatten = function(nestedArray) {
  let result = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i]) === true) {
      for (let j = 0; j < nestedArray[i].length; j++) {
        result.push(nestedArray[i][j]);
      }
    } else {
      result.push(nestedArray[i]);
    }
  }
  return result;
};

//Test code
console.log(flatten([1, 2, 3]));
console.log(flatten([1, 2, [1, 2, 3], 3, 4]));
console.log(flatten([[1, 3], [1, 2]]));
console.log(flatten([1, [2, 3], [4, 5]]));