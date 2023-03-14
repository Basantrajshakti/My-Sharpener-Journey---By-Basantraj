
var maximumWealth = function (accounts) {
  let max = -Infinity;
  let len1 = accounts.length;

  for (let i = 0; i < len1; i++) {
    let len2 = accounts[i].length;
    let sum = 0;

    for (let j = 0; j < len2; j++)
      sum += accounts[i][j];

    if (sum > max)
      max = sum;
  }
  
  return max;
};