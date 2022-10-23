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

const middle = function(arr) {
  if (arr.length < 3) {
    return [];
  } else {
    const evenMedium1 = arr[arr.length / 2 - 1]
    const evenMedium2 = arr[arr.length / 2]
    const oddMedium = arr[Math.floor(arr.length / 2)]
    return (arr.length % 2 === 0 ? [evenMedium1, evenMedium2] : [oddMedium]);
  }
};

//Test code
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([[1, 2]]));
console.log(middle([1]));