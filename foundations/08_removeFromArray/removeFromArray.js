const removeFromArray = function (arr, ...arg) {
  const newArr = [];
  for (let el of arr) {
    if (!arg.includes(el)) {
      newArr.push(el);
    }
  }

  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
