const findKeyByValue = function(sampleObject, value) {
  for (const key in sampleObject) {
    if (sampleObject[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;