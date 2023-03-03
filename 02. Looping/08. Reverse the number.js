function reverse(n) {
  /* Function to return the reverse of a number n */
  let rev = 0;

  while (n) {
    rev *= 10;
    rev += n % 10;
    n -= n % 10;
    n = Math.floor(n / 10);
  }

  return rev;
}