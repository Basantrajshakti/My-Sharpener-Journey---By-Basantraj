var runningSum = function (nums) {
  let len = nums.length;
  let runSum = [];

  for (let j = 0; j < len; j++) {
    let sum = 0;

    for (let k = 0; k <= j; k++)
      sum += nums[k];

    runSum[j] = sum;
  }

  return runSum;
};
