const tail = function(arr) {
  let result = [];
  // Return all the items in the array except for the first one
  for (let i = 1; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
};

module.exports = tail;