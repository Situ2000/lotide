const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

//Test code
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 3, 3], [1, 2, 3]), true);
// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) // => true
// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])) // => false
// console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])) // => false

describe("#eqArrays", () => {
  
  it("returns false for [1, 2, 3, 4] and [1, 2, 3]", () => {
    assert.isFalse(eqArrays([1, 2, 3, 4], [1, 2, 3]));
  });

  it("returns false for [[2, 3], [4]] and [[2, 3], [4, 5]]", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); 
  });

});