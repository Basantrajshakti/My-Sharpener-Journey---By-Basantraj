
function prime_numbers(n) {
  /* Function to store first n prime_numbers in an array
  Return the array containing the prime numbers */

  const arr = [];
  let num = 2;

  while (arr.length < n) {
    let flag = true;

    for (let i = 2; i <= num/2; i++) {
      if(num%i === 0) {
        flag = false;
        break;
      }
    }

    if (flag) {
      arr.push(num);
    }

    num++;
  }

  return arr;
}
