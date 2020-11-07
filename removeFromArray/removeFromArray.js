const removeFromArray = function(array, ...toBeRemovedValues) {
  
  for (let i = 0; i < toBeRemovedValues.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] === toBeRemovedValues[i]) {
        array.splice(j, 1);
      }
    }
  }

  return array;
}

module.exports = removeFromArray
