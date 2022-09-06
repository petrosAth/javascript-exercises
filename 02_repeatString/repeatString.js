const repeatString = function(string, num) {
  let multipliedString = string;
  if (num === 0) {
    multipliedString = "";
  } else if (num < 0) {
    return "ERROR";
  } else {
    for (num = num - 1; num > 0; --num) {
      multipliedString += string;
    }
  }
  return multipliedString;
};

// Do not edit below this line
module.exports = repeatString;
