// Best solution
var hasAlternatingBits = function(n) {
  n = n^(n>>1);
  return (n & n+1)==0;
};

// Another solution 
const hasAlternatingBits = (n) => {
  let Nbin = n.toString(2);
  for (let i = 0; i < Nbin.length; i++) {
      if (Nbin[i] == Nbin[i + 1]) {
          return false;
      }
  }
  return true;
};

// Another solution
var hasAlternatingBits = function(n) {
  let prev;

  while(n) {
      prev = n & 1;
      n = n >> 1;

      if((n & 1) === prev) 
          return false;
  }

  return true;
};