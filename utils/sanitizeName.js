function removeAccents(text) {
  return text.normalize("NFD").replaceAll(/[\u0300-\u036f]/g, "");
}

function sanitizeName(fullName) {
  const firstName = fullName.trim().split(/\s+/)[0];
  const normalized = removeAccents(firstName).toLowerCase();
  return normalized.replaceAll(/[^a-z]/g, "");
}

module.exports = {
  sanitizeName
}
