const sumAll = function (a, b) {
  if (a < 0 || b < 0) {
    return "ERROR";
  } else if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  }

  let total = 0;
  let start = a <= b ? a : b;
  let end = b >= a ? b : a;
  for (let i = start; i <= end; i++) {
    total += i;
  }

  return total;
};

// Do not edit below this line
module.exports = sumAll;
