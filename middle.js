const middle = function(arr) {
  if (arr.length < 3) {
    return [];
  } else {
    // Return the middle items of the array
    // If the length of the array is odd, then return only one item
    // If the length of the array is even, then return two items
    const evenMedium1 = arr[arr.length / 2 - 1]
    const evenMedium2 = arr[arr.length / 2]
    const oddMedium = arr[Math.floor(arr.length / 2)]
    return (arr.length % 2 === 0 ? [evenMedium1, evenMedium2] : [oddMedium]);
  }
};

module.exports = middle;