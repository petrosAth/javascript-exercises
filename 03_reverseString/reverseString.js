const reverseString = function(string) {
  // let reversedString = "";
  // for (let i = string.length - 1; i >= 0; i--) {
  //   reversedString += string[i];
  // }
  let reversedString = string.split("").reverse().join("");
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
