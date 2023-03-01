function weekday_name(n) {
  /*write the code to print the weekday name in lower case when
   the weekday number is given using switch statements*/

  switch (n) {
    case 1: console.log('monday');
      break;
    case 2: console.log('tuesday');
      break;
    case 3: console.log('wednesday');
      break;
    case 4: console.log('thursday');
      break;
    case 5: console.log('friday');
      break;
    case 6: console.log('saturday');
      break;
    case 7: console.log('sunday');
      break;
    default: console.log('invalid');
  }
}