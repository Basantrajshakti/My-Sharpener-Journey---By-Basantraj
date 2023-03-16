
var missingNumber = function (nums) {
  const len = nums.length;
  const s = new Set(nums);

  for (let i = 1; i <= len; i++)
    if (!s.has(i))
      return i;
};