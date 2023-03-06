function print_pattern() {
  /* Function to print the pattern */

  let i = 5;

  while (i > 0) {
    let str = '';
    let j = i--;

    while (j > 0) {
      str += '*';
      j--;
    }

    console.log(str);
  }
}


// *****
// ****
// ***
// **
// *