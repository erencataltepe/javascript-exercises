const repeatString = function(string, interval) {
  let result = "";
  
  if (interval < 0) {
    return "ERROR";
  }
  
  for (let i = 0; i < interval; i++) {
    result += string;
  }

  return result;
}

module.exports = repeatString
