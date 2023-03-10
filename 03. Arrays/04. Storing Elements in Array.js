function store_numbers(n) {
  /*Function to store the number from 1 to n 
  Note - After storing return the array */
  let arr = [n];

  for (let i = 0; i < n; i++)
    arr[i] = i + 1;

  return arr;
}