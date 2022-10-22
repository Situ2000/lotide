const assertEqual = function(actual, expected) {
  let assertionPassed = `💚💚💚Assertion Passed: ${actual} === ${expected}`;
  let assertionFailed = `🅾️🅾️🅾️Assertion Failed: ${actual} !== ${expected}`;
  console.log(actual === expected ? assertionPassed : assertionFailed);
};

const tail = function(arr) {
  let result = [];
  for (let i = 1; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
};

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"