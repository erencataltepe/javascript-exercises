const repeatString = function (word, repeatCount) {
  const lastWord = [];

  if (repeatCount < 0) {
    return "ERROR";
  }

  for (let i = 0; i < repeatCount; i++) {
    lastWord.push(word);
  }

  return lastWord.join("");
};

// Do not edit below this line
module.exports = repeatString;
