const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  // Check whether the lengths of two objects are equal
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key in object1) {
    // Check whether the values in both objects are objects ('object' includes both object and array)
    if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
      // If the values are objects, check whether the they are arrays
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        // If they are arrays, can use eqArrays function to check whether they equal
        if (! eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        // If they are objects, they need to go through the eqObjects function again
        if (! eqObjects(object1[key], object2[key])) {
          return false;
        }
      }
    } else {
      // If they are not objects or arrays at the same time, compare whether these two items equal
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;
};

module.exports = eqObjects;