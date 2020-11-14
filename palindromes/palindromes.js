const palindromes = function(word) {
  const arr = word.toLowerCase().split("").filter((char) => char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 122);
  const reverseArr = [...arr].reverse();
  for (let i = 0; i < reverseArr.length; i++) {
    if (reverseArr[i] != arr[i]) {
      return false;
    }
  }
  return true;
}

module.exports = palindromes
