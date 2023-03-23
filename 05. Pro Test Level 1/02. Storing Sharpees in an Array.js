function sharpees(n) {
  /* Function to store first n sharpees in an array
  Return the array containing the sharpees numbers */
  let sharpees = [];
  let ctr = 5;

  for (let i = 0; i < n; i++) {
    let num = ctr;
    let sum = 0;

    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }

    if (sum % 5 === 0)
      sharpees[i] = ctr;
    else
      i--;

    ctr++;
  }

  return sharpees;
}
