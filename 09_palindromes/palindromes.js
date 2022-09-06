const palindromes = function(text) {
  text = text.toLowerCase();
  text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g, "");
  let textLength = text.length - 1;
  let reverseText = "";

  for (textLength; textLength >= 0; textLength--) {
    reverseText += text[textLength];
  }

  return text === reverseText ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
