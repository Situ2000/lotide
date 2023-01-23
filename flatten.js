const flatten = function(nestedArray) {
  let result = [];
  for (let i = 0; i < nestedArray.length; i++) {
    // Check whether each item in nestedArray is an array
    if (Array.isArray(nestedArray[i]) === true) {
      // If it is an array, add each item inside it to the result
      for (let j = 0; j < nestedArray[i].length; j++) {
        result.push(nestedArray[i][j]);
      }
    } else {
      // If it is not an array, add it to the result
      result.push(nestedArray[i]);
    }
  }
  return result;
};

module.exports = flatten;