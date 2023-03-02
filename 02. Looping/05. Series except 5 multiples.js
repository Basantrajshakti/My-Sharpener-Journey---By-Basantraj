function print_output(n) {
  /*Print all numbers from 1 to n except the ones divisible by 5
  use the help of continue statement to leverage this */
  let ctr = 1;

  while (ctr <= n) {
    ctr % 5 === 0 ? '' : console.log(ctr);
    ctr++;
  }
}