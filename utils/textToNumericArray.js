function textToNumericArray(text) {
  return text.split("").map((char) => char.charCodeAt(0) / 1000);
}

module.exports = {
  textToNumericArray,
};
