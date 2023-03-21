
var mostWordsFound = function (sentences) {
  let max = sentences[0].split(' ').length;

  for (let i = 1; i < sentences.length; i++) {
    let temp = sentences[i].split(' ').length;

    if (temp > max)
      max = temp;
  }

  return max;
};