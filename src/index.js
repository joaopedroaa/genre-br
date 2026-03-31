const brain = require("brain.js");
const path = require("node:path");
const { prepareInput } = require("./utils");

let net;

try {
  const modelData = require(path.join(__dirname, "model.json"));
  net = new brain.NeuralNetwork();
  net.fromJSON(modelData);
} catch (error) {
  throw new Error(
    "Modelo pré-treinado não encontrado (src/model.json). " +
      'Execute "npm run train" para gerar o modelo.',
  );
}

function getGenderInfo(name) {
  if (!name || typeof name !== "string") {
    throw new Error(
      "O nome fornecido é inválido. Forneça uma string não vazia.",
    );
  }

  const input = prepareInput(name);
  const output = net.run(input);

  // gender: 0 = feminino, 1 = masculino
  const genderScore = output.gender;
  const isMale = genderScore > 0.5;
  const certainty = isMale ? genderScore : 1 - genderScore;
  const certaintyPercent = `${(certainty * 100).toFixed(1)}%`;

  return {
    name,
    male: isMale,
    female: !isMale,
    certainty: certaintyPercent,
  };
}




module.exports = { getGenderInfo };
