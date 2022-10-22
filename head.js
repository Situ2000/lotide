const assertEqual = function(actual, expected) {
  let assertionPassed = `💚💚💚Assertion Passed: ${actual} === ${expected}`;
  let assertionFailed = `🅾️🅾️🅾️Assertion Failed: ${actual} !== ${expected}`;
  console.log(actual === expected ? assertionPassed : assertionFailed);
};

const head = function(arr) {
  return (arr.length === 0 ? undefined : arr[0]);
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");