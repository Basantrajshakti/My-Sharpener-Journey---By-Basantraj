function print_series(n, m) {
  /* Print the following series from 1 to n if m is present stop printing the series 
         Note print all the numbers in a seperate line */

  for (let i = 1; i <= n; i++) {
    if (m === i)
      break;

    console.log(i);
  }
}