const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  let result = 0;
  for (const number of array) {
    result += number;
  }
  return result;
};

const multiply = function(array) {
  let result = 1;
  for (const number of array) {
    result *= number;
  }
  return result;
};

const power = function(a, b) {
  let powerOfNumber = 1;
  for (let i = b; i > 0; i--) {
    powerOfNumber *= a;
  }
  return powerOfNumber;
};

const factorial = function(number) {
  if (number === 0) {
    return number + 1;
  } else {
    return number * factorial(number - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
