function print_pattern() {
  /* Function to print the pattern */
  let ctr = 5;

  for (let i = 1; i <= 5; i++) {
    let str = '';

    for (let i1 = 1; i1 <= i; i1++)
      str += '*';

    for (let i2 = ctr; i2 > 1; i2--)
      str += ' ';

    for (let i3 = 1; i3 <= i; i3++)
      str += '*';

    ctr--;
    console.log(str);
  }

}


// *    *
// **   **
// ***  ***
// **** ****
// **********