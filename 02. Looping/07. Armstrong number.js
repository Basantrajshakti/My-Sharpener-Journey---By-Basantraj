
function check_armstrong(n) {
  /*Function to check whether a number is an armstrong number or not
     Print true if yes else false */
  let temp, sum = 0;

  while (n) {
    temp = n % 10;
    sum += temp ** 3;
    n = parseInt(n / 10);
  }

  console.log(sum === temp);
}