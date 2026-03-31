const { sanitizeName } = require("../utils/sanitizeName");
const { getLastChars } = require("../utils/getLastChars");
const { textToNumericArray } = require("../utils/textToNumericArray");
const { prepareInput, INPUT_LENGTH } = require("../utils/prepareInput");

module.exports = {
  INPUT_LENGTH,
  sanitizeName,
  getLastChars,
  textToNumericArray,
  prepareInput,
};
