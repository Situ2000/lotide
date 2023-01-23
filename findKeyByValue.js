const findKeyByValue = function(sampleObject, value) {
  // Compare each value in sampleObject to the given value, return the key when they are equal
  for (const key in sampleObject) {
    if (sampleObject[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;