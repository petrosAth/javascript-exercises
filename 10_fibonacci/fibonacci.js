const fibonacci = function(number) {
  if (number < 0) {
    return "OOPS";
  }
  let result = 1;
  let fibonacciArray = [];
  for (let i = 0; i < number; i++) {
    fibonacciArray.push(result);
    if (i === 0) {
      result = fibonacciArray[i];
    } else if (i === 1) {
      result = fibonacciArray[i];
    } else {
      result = fibonacciArray[i - 1] + fibonacciArray[i];
    }
  }
  return result;
};

// Do not edit below this line
module.exports = fibonacci;
