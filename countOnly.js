const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    // If the value of the key in itemsToCount is true, count the number of the key in allItems
    if (itemsToCount[item]) { 
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

module.exports = countOnly;