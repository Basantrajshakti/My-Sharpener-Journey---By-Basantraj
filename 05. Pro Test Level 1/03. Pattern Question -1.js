function print_pattern() {
  /* Function to print the pattern */

  for (let i = 1; i <= 10; i++) {
    let str = '';

    if (i <= 5) {
      for (let j = 1; j <= i; j++)
        str += '*';
      console.log(str);
    } else {
      for (let j = 10; j >= i; j--)
        str += '*';
      console.log(str);
    }
  }
}


// *
// **
// ***
// ****
// *****
// *****
// ****
// ***
// **
// *