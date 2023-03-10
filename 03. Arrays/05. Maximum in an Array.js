function find_maximum(arr, length) {
  /*Function to find the maximum in the array--> arr 
  return the maximum value*/
  let max = arr[0];

  for (let i = 1; i < length; i++) {
    if (arr[i] > max)
      max = arr[i];
  }

  return max;
}