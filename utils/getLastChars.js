function getLastChars(name, length = 7) {
  if (name.length >= length) {
    return name.slice(-length);
  }

  return name.padStart(length, " ");
}

module.exports = {
  getLastChars
}
