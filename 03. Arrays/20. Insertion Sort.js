function sort_array(arr, length) {
  /*Function to sort the array in ascending order
  After sorting return the sorted array */
  let current, j;

  for (let i = 1; i < length; i++) {
    current = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}