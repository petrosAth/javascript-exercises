const sumAll = function(fromNum, toNum) {
  if (fromNum < 0 || toNum < 0) {
    return "ERROR";
  }
  if (!(typeof fromNum === "number") || !(typeof toNum === "number")) {
    return "ERROR";
  }
  let sum = 0;
  if (fromNum < toNum) {
    for (let i = fromNum; i <= toNum; i++) {
      sum += i;
    }
  } else if (fromNum > toNum) {
    for (let i = toNum; i <= fromNum; i++) {
      sum += i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
