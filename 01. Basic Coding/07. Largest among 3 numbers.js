function max(a, b, c) {
  /*write the code to find the maximum between the three numbers below 
   only print the maximum number  */
  if (a > b) {
    if (a > c)
      console.log(a);
    else
      console.log(c);
  }
  else if (b > c)
    console.log(b);
  else
    console.log(c);

}