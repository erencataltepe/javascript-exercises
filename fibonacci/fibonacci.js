const fibonacci = function(n) {
  if (n < 0) {
    return "OOPS";
  }

  if (typeof n === "string") {
    n = Number(n);
  }

  let pre = 1;
  let next = 1;
  let tempNext;

  if (n == 1 || n == 2) {
    return 1;
  } 

  for (let i = 2; i < n; i++) {
    tempNext = pre + next;
    pre = next;
    next = tempNext;
  }

  return tempNext;
}

module.exports = fibonacci
