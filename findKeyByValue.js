const assertEqual = function(actual, expected) {
  let assertionPassed = `💚💚💚Assertion Passed: ${actual} === ${expected}`;
  let assertionFailed = `🅾️🅾️🅾️Assertion Failed: ${actual} !== ${expected}`;
  console.log(actual === expected ? assertionPassed : assertionFailed);
};

const findKeyByValue = function(sampleObject, value) {
  for (const key in sampleObject) {
    if (sampleObject[key] === value) {
      return key;
    }
  }
};

// Test Codes
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");