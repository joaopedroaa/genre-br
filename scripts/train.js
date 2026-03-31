const brain = require("brain.js");
const fs = require("node:fs");
const path = require("node:path");

const {
  sanitizeName,
  getLastChars,
  textToNumericArray,
} = require("../src/utils");

const ROOT = path.resolve(__dirname, "..");

const femalePath = path.join(ROOT, "data", "female.json");
const malePath = path.join(ROOT, "data", "male.json");

const femaleNames = JSON.parse(fs.readFileSync(femalePath, "utf-8"));
const maleNames = JSON.parse(fs.readFileSync(malePath, "utf-8"));

console.log(`Nomes femininos: ${femaleNames.length}`);
console.log(`Nomes masculinos: ${maleNames.length}`);


function createTrainingData(rawName, genderValue) {
  try {
    const sanitized = sanitizeName(rawName);
    if (sanitized.length === 0) return null;

    const suffix = getLastChars(sanitized);
    const input = textToNumericArray(suffix);

    return { input, output: { gender: genderValue } };
  } catch {
    return null;
  }
}

const trainingData = [];

const FEMININO_VALUE = 0;
const MASCULINO_VALUE = 1;

for (const name of femaleNames) {
  const data = createTrainingData(name, FEMININO_VALUE);
  if (data) trainingData.push(data);
}

for (const name of maleNames) {
  const data = createTrainingData(name, MASCULINO_VALUE);
  if (data) trainingData.push(data);
}

// Fisher-Yates
for (let i = trainingData.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [trainingData[i], trainingData[j]] = [trainingData[j], trainingData[i]];
}

console.log(`Total de amostras válidas: ${trainingData.length}`);

const net = new brain.NeuralNetwork({
  hiddenLayers: [32, 16],
  learningRate: 0.1,
});


const stats = net.train(trainingData, {
  iterations: 100,
  errorThresh: 0.005,
  log: true,
  logPeriod: 10,
});


console.log(`Iterações: ${stats.iterations}`);
console.log(`Erro final: ${stats.error.toFixed(6)}`);

const versionName = `passarelo`;
const errorName = `err${(stats.error * 100).toFixed(3)}`;
const version = `${versionName}-${errorName}`;

const modelPath = path.join(ROOT, "models", `${version}.json`);
const modelJSON = net.toJSON();

fs.writeFileSync(modelPath, JSON.stringify(modelJSON), "utf-8");
