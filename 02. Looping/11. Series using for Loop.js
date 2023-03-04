function print_series(n) {
  /* Print the following series 
         1 8 27 64 125 to n (including) . Note print all the numbers in a seperate line*/

  n = Math.cbrt(n);

  for (let i = 1; i <= n; i++)
    console.log(i ** 3);
}