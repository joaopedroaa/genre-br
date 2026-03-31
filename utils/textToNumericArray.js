const ALPHABET = "abcdefghijklmnopqrstuvwxyz ".split("");
const CHAR_TO_INDEX = {};
ALPHABET.forEach((char, index) => {
  CHAR_TO_INDEX[char] = index;
});

function textToNumericArray(text) {
  const result = [];
  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();
    const oneHot = new Array(27).fill(0);
    const index = CHAR_TO_INDEX[char];
    if (index !== undefined) {
      oneHot[index] = 1;
    } else {
      oneHot[26] = 1;
    }
    result.push(...oneHot);
  }
  return result;
}

module.exports = {
  textToNumericArray,
};
