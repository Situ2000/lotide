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

module.exports = flatten;