const countLetters = function(sampleString) {
  modifiedString = sampleString.replaceAll(' ', '');
  const results = {};
  
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