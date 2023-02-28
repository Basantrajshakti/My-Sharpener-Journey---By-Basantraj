function print_cost(distance) {
  /*write the code below to print the cost if the distance is given   */
  if (distance >= 1000)
    console.log(12.00);
  else if (distance > 500)
    console.log(10.00);
  else if (distance > 100)
    console.log(8.00);
  else if (distance >= 0)
    console.log(5.00);
}