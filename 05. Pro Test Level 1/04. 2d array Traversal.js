var counter = function (arr) {
  let ctr = 0;

  for (let i = 0; i < arr.length; i++)
    for (let j = 0; j < arr[i].length; j++)
      if (arr[i][j] === 5)
        ctr++;

  return ctr;
};