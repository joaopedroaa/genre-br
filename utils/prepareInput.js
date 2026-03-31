const { sanitizeName } = require("./sanitizeName");
const { getLastChars } = require("./getLastChars");
const { textToNumericArray } = require("./textToNumericArray");

const INPUT_LENGTH = 135; // 5 characters * 27 elements (one-hot)

function prepareInput(rawName) {
  const sanitized = sanitizeName(rawName);
  const suffix = getLastChars(sanitized, 5);
  return textToNumericArray(suffix);
}

module.exports = {
  INPUT_LENGTH,
  prepareInput,
};
