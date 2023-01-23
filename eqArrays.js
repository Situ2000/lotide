const eqArrays = function(arr1, arr2) {
  // Check whether the lengths of two arrays are equal
  if (arr1.length !== arr2.length) {
    return false;
  }
    
  for (let i = 0; i < arr1.length; i++){
    // Check whether the items in both arrays are arrays
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      // If they are arrays, they need to go through the function again
      if (! eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else {
      // If they are not arrays, compare whether these two items equal
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
    
  return true;
};

module.exports = eqArrays;


// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   } else {
//     for (let i = 0; i < arr1.length; i++){
//       if (arr1[i] !== arr2[i]) {
//         return false;
//       }
//     }
//     return true;
//   }
// };
