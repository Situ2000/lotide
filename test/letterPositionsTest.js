const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

//Test Codes
// assertArraysEqual(letterPositions("hello").e, [1]);
// console.log(letterPositions("lighthouse in the house"));

describe("#letterPositions", () => {
  
  it("returns [2] for 'g' in 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").g, [2]);
  });

  it("returns [3, 5, 15, 18] for 'h' in 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]); 
  });

});