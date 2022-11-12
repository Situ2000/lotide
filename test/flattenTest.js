const assert = require('chai').assert;
const flatten = require('../flatten');

//Test code
// console.log(flatten([1, 2, 3]));
// assertArraysEqual(flatten([1, 2, 3]), [1, 2, 3]);
// console.log(flatten([1, 2, [1, 2, 3], 3, 4]));
// assertArraysEqual(flatten([1, 2, [1, 2, 3], 3, 4]), [1, 2, 1, 2, 3, 3, 4]);
// console.log(flatten([[1, 3], [1, 2]]));
// assertArraysEqual(flatten([[1, 3], [1, 2]]), [1, 3, 1, 2]);
// console.log(flatten([1, [2, 3], [4, 5]]));
// assertArraysEqual(flatten([1, [2, 3], [4, 5]]), [1, 2, 3, 4, 5]);

describe("#flatten", () => {
  
  it("returns [1, 2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(flatten([1, 2, 3]), [1, 2, 3]);
  });

  it("returns [1, 2, 1, 2, 3, 3, 4] for [1, 2, [1, 2, 3], 3, 4]", () => {
    assert.deepEqual(flatten([1, 2, [1, 2, 3], 3, 4]), [1, 2, 1, 2, 3, 3, 4]); 
  });

});