function sort_array(arr, length) {
  /*Function to sort the array in descending order
  After sorting return the sorted array */

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}