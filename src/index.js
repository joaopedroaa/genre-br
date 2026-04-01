const brain = require("brain.js");
const { prepareInput } = require("../utils/prepareInput");
const modelData = require("./model.json");

let net;

try {
  net = new brain.NeuralNetwork();
  net.fromJSON(modelData);
} catch {
  throw new Error("Modelo pré-treinado não encontrado (./model.json).");
}

function getGenderInfo(name) {
  if (!name) {
    return {
      name: null,
      male: true,
      female: false,
      certainty: null,
    };
  }

  const input = prepareInput(name);
  const output = net.run(input);

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
