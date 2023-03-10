function find_minimum(arr, length) {
  /*Function to find the minimum in the array--> arr 
    return the minimum value*/
  let min = arr[0];

  for (let i = 1; i < length; i++) {
    if (arr[i] < min)
      min = arr[i];
  }

  return min;
}