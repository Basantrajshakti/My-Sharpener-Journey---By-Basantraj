function print_digits(n) {
  /*Function to print the digits of the number n 
      Note Print all the digits in a new line*/
  while (n) {
    console.log(n % 10);
    n = parseInt(n / 10);
  }
}