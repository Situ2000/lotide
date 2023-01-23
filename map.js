const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  // Modify each item in the array by the callback function
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);


//Test codes
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const colours = ["blue", "yellow", "red", "green", "white", "black"];
const results2 = map(colours, colour => colour[0]);
assertArraysEqual(results2, ["b", "y", "r", "g", "w", "b"]);