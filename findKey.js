const assertEqual = require('./assertEqual');

const findKey = (object, callback) => {
  // Find the first key that its value can pass the callback function
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

//Test codes
const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);
assertEqual(result1, "noma");