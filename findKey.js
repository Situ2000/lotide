const assertEqual = function(actual, expected) {
  let assertionPassed = `💚💚💚Assertion Passed: ${actual} === ${expected}`;
  let assertionFailed = `🅾️🅾️🅾️Assertion Failed: ${actual} !== ${expected}`;
  console.log(actual === expected ? assertionPassed : assertionFailed);
};

const findKey = (object, callback) => {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);
assertEqual(result1, "noma");