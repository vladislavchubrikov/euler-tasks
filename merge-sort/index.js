//O(log n)
function mergeSort(array) {
  if (array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle));

  function merge(left, right) {
    const sortedArray = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortedArray.push(left.shift());
      } else {
        sortedArray.push(right.shift());
      }
    }

    return [...sortedArray, ...left, ...right];
  }

  return merge(left, right);
}

console.time('TIME');
console.log(mergeSort([5, 134, 325, 7, 15, 34, 12]));
console.timeEnd('TIME');
