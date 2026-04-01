const brain = require("brain.js");
const fs = require("node:fs");
const path = require("node:path");
const { prepareInput } = require("../utils/prepareInput.js");
const { GENDER } = require("../utils/enums.js");

const modelPath = path.join(__dirname, "../models/passarelo-err4.446.json");
const modelData = JSON.parse(fs.readFileSync(modelPath, "utf8"));

const net = new brain.NeuralNetwork();
net.fromJSON(modelData);

const malesPath = path.join(__dirname, "../data/male.json");
const femalesPath = path.join(__dirname, "../data/female.json");

const males = JSON.parse(fs.readFileSync(malesPath, "utf8"));
const females = JSON.parse(fs.readFileSync(femalesPath, "utf8"));

function getRandomSamples(array, numSamples) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numSamples);
}

function runAudit(numTests = 100) {
  console.log(
    `\nIniciando Auditoria: Testando ${numTests} nomes masculinos e ${numTests} nomes femininos...\n`,
  );

  const sampleMales = getRandomSamples(males, numTests);
  const sampleFemales = getRandomSamples(females, numTests);

  const failures = [];

  sampleMales.forEach((name) => {
    const features = prepareInput(name);
    const result = net.run(features);

    if (Number.isNaN(result.gender) || result.gender < 0.5) {
      failures.push({
        nome: name,
        generoReal: "Masculino",
        redeAchaQueEh: Number.isNaN(result.gender)
          ? "Indefinido (NaN)"
          : "Feminino",
        certezaDoErro: Number.isNaN(result.gender)
          ? "NaN%"
          : `${(result.gender * 100).toFixed(1)}%`,
      });
    }
  });

  sampleFemales.forEach((name) => {
    const features = prepareInput(name);
    const result = net.run(features);

    if (Number.isNaN(result.gender) || result.gender >= 0.5) {
      failures.push({
        nome: name,
        generoReal: "Feminino",
        redeAchaQueEh: Number.isNaN(result.gender)
          ? "Indefinido (NaN)"
          : "Masculino",
        certezaDoErro: Number.isNaN(result.gender)
          ? "NaN%"
          : `${((1 - result.gender) * 100).toFixed(1)}%`,
      });
    }
  });

  const totalTests = numTests * 2;
  const accuracy = (((totalTests - failures.length) / totalTests) * 100).toFixed(2);

  if (failures.length > 0) {
    const errorRate = ((failures.length / totalTests) * 100).toFixed(2);
    console.log(
      `Encontradas ${failures.length} falhas em ${totalTests} testes (${errorRate}% de erro na amostra).\n`,
    );

    const failuresPath = path.join(__dirname, "../failures.json");
    fs.writeFileSync(failuresPath, JSON.stringify(failures, null, 2));
    console.log(`Os dados que falharam foram extraídos e salvos em: ${failuresPath}`);

    console.log("\nFalhas:");
    console.table(failures);
  }

    console.log(`\nTaxa de acerto final: ${accuracy}%`);
}

runAudit(1000);
