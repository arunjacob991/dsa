console.log("quickSort");

function partition(array, start, end) {
  const pivotValue = array[start];

  let swapIndex = start;

  for (i = start + 1; i <= end; i++) {
    if (pivotValue > array[i]) {
      swapIndex++;
      if (i !== swapIndex) {
        [array[i], array[swapIndex]] = [array[swapIndex], array[i]];
      }
    }
  }

  if (swapIndex !== start) {
    [array[swapIndex], array[start]] = [array[start], array[swapIndex]];
  }
  return swapIndex;
}

function quickSort(array, start = 0, end = array.length - 1) {
  if (start >= end) return;

  let pivotIndex = partition(array, start, end);

  quickSort(array, start, pivotIndex - 1);
  quickSort(array, pivotIndex + 1, end);

  return array;
}


array = [1, 2, 5, 7, 3, 9, 4, 6, 8, 2];

console.log(quickSort(array));
