
function find_maximum_subarray(arr, length) {
  let curSum = 0;
  let maxSum = arr[0];

  for (let i = 0; i < length; i++) {
    curSum += arr[i];

    if (curSum > maxSum) 
      maxSum = curSum;
    
    if (curSum < 0) 
      curSum = 0;
  }

  return maxSum;
}
