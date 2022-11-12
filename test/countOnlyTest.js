const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

describe("#countOnly", () => {
  
  it("returns {Jason: 1, Fang: 2} for firstname and {Jason: true, Karima: true, Fang: true, Agouhanna: false }", () => {
    assert.deepEqual(countOnly(firstNames,{Jason: true, Karima: true, Fang: true, Agouhanna: false }), {Jason: 1, Fang: 2});
  });

  it("returns {Jason: 1, Salima: 2, Agouhanna: 1} for firstname and {Jason: true, Karima: true, Fang: false, Agouhanna: true, Salima: true }", () => {
    assert.deepEqual(countOnly(firstNames,{Jason: true, Karima: true, Fang: false, Agouhanna: true, Salima: true }), {Jason: 1, Salima: 2, Agouhanna: 1});
  });
});