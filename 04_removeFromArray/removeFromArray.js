const removeFromArray = function(...args) {
  const array = args[0];
  const arrayWithSplices = args.slice(1);
  for (const index of arrayWithSplices) {
    let elementToSplice = array.findIndex((element) => element === index);
    if (elementToSplice >= 0) {
      array.splice(elementToSplice, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
