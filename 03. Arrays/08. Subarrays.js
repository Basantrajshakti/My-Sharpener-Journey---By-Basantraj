
function print_subarray(arr, length) {
  /*Function to print all the subarrays given in an array
   Input arr--> array, length -->length of an array */

  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
      let str = '';

      for (let k = i; k <= j; k++) {
        str += arr[k];
      }

      console.log(str);
    }
  }
}
