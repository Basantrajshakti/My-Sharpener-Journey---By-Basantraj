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

  i = 0;
  while (i < 5) {
    let str = '';
    let j = 0;

    while (j <= i) {
      str += '*';
      j++;
    }

    i++;
    console.log(str);
  }

}


// *****
// ****
// ***
// **
// *
// *
// **
// ***
// ****
// *****