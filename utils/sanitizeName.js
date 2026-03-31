function removeAccents(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function sanitizeName(fullName) {
  if (!fullName || typeof fullName !== "string") {
    throw new Error(
      "O nome fornecido é inválido. Forneça uma string não vazia.",
    );
  }

  const firstName = fullName.trim().split(/\s+/)[0];
  const normalized = removeAccents(firstName).toLowerCase();
  return normalized.replace(/[^a-z]/g, "");
}

module.exports = {
  sanitizeName
}
