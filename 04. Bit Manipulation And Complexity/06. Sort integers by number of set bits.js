
var sortByBits = function (arr) {
  const len = arr.length;
  const sBits = [];

  for (let j = 0; j < len; j++) {
    let count = 0;

    for (let i = 0; i < 32; i++)
      if ((arr[j] >> i & 1) === 1)
        count++;

    sBits.push(count);
  }

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < len - i; j++) {

      if (sBits[j] > sBits[j + 1] || (sBits[j] == sBits[j + 1]) && arr[j] > arr[j + 1]) {
        let temp = sBits[j];
        sBits[j] = sBits[j + 1];
        sBits[j + 1] = temp;

        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};