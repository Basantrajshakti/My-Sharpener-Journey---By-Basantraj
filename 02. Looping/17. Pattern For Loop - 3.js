function print_pattern() {
  /* Function to print the pattern */
  for (let i = 5; i > 0; i--) {
    let str = '';

    for (let j = i; j > 0; j--)
      str += '*';

    console.log(str);
  }

  for (let i = 0; i < 5; i++) {
    let str = '';

    for (let j = 0; j <= i; j++)
      str += '*';

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