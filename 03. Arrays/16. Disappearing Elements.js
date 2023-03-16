
var findDisappearedNumbers = function (nums) {
  const len = nums.length;
  const s = new Set(nums);

  if (s.size === len)
    return [];

  const ans = [];
  for (let i = 1; i <= len; i++)
    if (!s.has(i))
      ans.push(i);

  return ans;
};