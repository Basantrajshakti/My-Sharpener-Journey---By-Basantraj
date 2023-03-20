var toHex = function (num) {
  if (num < 0)
    num = 0xFFFFFFFF + num + 1;

  return num.toString(16);
};


// Another solution 
var toHex = function (num) {
  let table = '0123456789abcdef';
  let result = '';

  if (num < 0)
    num = 4294967296 + num;

  while (num) {
    let a = num % 16;
    num = Math.floor(num / 16);
    result = table[a] + result;
  };

  // For 0 -> returns 0
  return result || "0";
};