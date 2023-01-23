// Return the first item of an array
const head = function(arr) {
  return (arr.length === 0 ? undefined : arr[0]);
};

module.exports = head;