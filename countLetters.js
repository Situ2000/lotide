const countLetters = function(sampleString) {
  // Get rid of all the space in the sample string
  modifiedString = sampleString.replaceAll(' ', '');
  const results = {};
  
  // Count the number of each letter in the modified string
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