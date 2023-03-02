function print_series(n) {
  /* Print the following series 
     1 4 9 16 25 36 to n. Note print all the numbers in a seperate line*/
  n = Math.sqrt(n);
  let ctr = 1;

  while (ctr <= n) {
    console.log(ctr * ctr);
    ctr++;
  }
}