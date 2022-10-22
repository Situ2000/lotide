// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let assertionPassed = "💚💚💚Assertion Passed: " + actual + " === " + expected;
  let assertionFailed = "🅾️🅾️🅾️Assertion Failed: " + actual + " !== " + expected;
  console.log(actual === expected ? assertionPassed : assertionFailed);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);