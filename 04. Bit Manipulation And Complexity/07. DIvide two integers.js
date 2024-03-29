
var divide = function (dividend, divisor) {
  let sign = ((dividend < 0) ^ (divisor < 0)) ? -1 : 1;

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  let quotient = 0;
  while (dividend >= divisor) {
    dividend -= divisor;
    ++quotient;
  }

  if (sign == -1)
    quotient = - quotient;

  return quotient;
};
