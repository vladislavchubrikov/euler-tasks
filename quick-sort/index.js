//O(n log n)
function quickSort(list) {
  if (list.length <= 1) {
    return list;
  }
  const pivot = list[list.length - 1];
  const leftList = [];
  const rightList = [];

  for (let i = 0; i < list.length - 1; i++) {
    if (list[i] < pivot) {
      leftList.push(list[i]);
    }
    else {
      rightList.push(list[i]);
    }
  }
  return [...quickSort(leftList), pivot, ...quickSort(rightList)];
}

console.time('TIME');
console.log(quickSort([2, 13, 12, 51, 5, 9, 7]));
console.timeEnd('TIME');
