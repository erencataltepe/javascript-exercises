const reverseString = function(string) {
  const arrayOfString = string.split("");
  const reverseArray = arrayOfString.reverse();
  const reverseString = reverseArray.join("");
  
  return reverseString;
}

module.exports = reverseString
