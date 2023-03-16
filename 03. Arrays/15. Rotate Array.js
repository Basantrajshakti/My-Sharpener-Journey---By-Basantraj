// Brute force solution
var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    let temp = nums.pop();
    nums.unshift(temp);
  }
};

// More optimized
var rotate = function (nums, k) {
  let a = [];
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    a[(i + k) % len] = nums[i];
  }

  for (let i = 0; i < len; i++) {
    nums[i] = a[i];
  }

};

// O(n) solution
var rotate = function (nums, k) {
  k = k % nums.length;

  if (nums.length <= 1) {
    return nums;
  }

  function rotate(s, e) {
    while (s < e) {
      let temp = nums[s];
      nums[s] = nums[e];
      nums[e] = temp;
      s++;
      e--;
    }
  }

  rotate(0, nums.length - 1);
  rotate(0, k - 1);
  rotate(k, nums.length - 1);
};

