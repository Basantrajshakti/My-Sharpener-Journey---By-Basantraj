
var isValid = function (s) {
  let rev = '';

  for (let i = s.length - 1; i >= 0; i--)
    rev += s[i];

  return s === rev;
};