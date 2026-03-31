const { sanitizeName } = require("./sanitizeName");
const { getLastChars } = require("./getLastChars");
const { textToNumericArray } = require("./textToNumericArray");

const INPUT_LENGTH = 7;

function prepareInput(rawName) {
  const sanitized = sanitizeName(rawName);
  const suffix = getLastChars(sanitized);
  return textToNumericArray(suffix);
}

module.exports = {
  INPUT_LENGTH,
  prepareInput,
};
