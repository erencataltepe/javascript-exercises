const sumAll = function(num1, num2) {
  let total = 0;
  let startNum, endNum;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return "ERROR";
  } else if (num1 < 0 || num2 < 0) {
    return "ERROR";
  } else if (num1 < num2) {
    startNum = num1;
    endNum = num2;
  } else {
    startNum = num2;
    endNum = num1;
  }

  for (let i = startNum; i <= endNum; i++) {
    total += i;
  }

  return total;
}

module.exports = sumAll
