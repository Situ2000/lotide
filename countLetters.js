const assertEqual = function(actual, expected) {
  let assertionPassed = `💚💚💚Assertion Passed: ${actual} === ${expected}`;
  let assertionFailed = `🅾️🅾️🅾️Assertion Failed: ${actual} !== ${expected}`;
  console.log(actual === expected ? assertionPassed : assertionFailed);
};

const countLetters = function(sampleString) {
  modifiedString = sampleString.replaceAll(' ', '');
  const results = {};
  
  for (const letter of modifiedString) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }

  return results;
};

// Test Codes
console.log(countLetters("lighthouse in the house"));