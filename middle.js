const middle = function(arr) {
  if (arr.length < 3) {
    return [];
  } else {
    const evenMedium1 = arr[arr.length / 2 - 1]
    const evenMedium2 = arr[arr.length / 2]
    const oddMedium = arr[Math.floor(arr.length / 2)]
    return (arr.length % 2 === 0 ? [evenMedium1, evenMedium2] : [oddMedium]);
  }
};

module.exports = middle;