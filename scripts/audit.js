
const brain = require('brain.js');
const fs = require('node:fs');
const path = require('node:path');
const { prepareInput } = require('../src/utils');

const modelPath = path.join(__dirname, '../src/model.json');
const modelData = JSON.parse(fs.readFileSync(modelPath, 'utf8'));

const net = new brain.NeuralNetwork();
net.fromJSON(modelData);

const malesPath = path.join(__dirname, '../data/male.json');
const femalesPath = path.join(__dirname, '../data/female.json');

const males = JSON.parse(fs.readFileSync(malesPath, 'utf8'));
const females = JSON.parse(fs.readFileSync(femalesPath, 'utf8'));

function getRandomSamples(array, numSamples) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numSamples);
}

function runAudit(numTests = 100) {
  console.log(`\nIniciando Auditoria: Testando ${numTests} nomes masculinos e ${numTests} nomes femininos...\n`);

  const sampleMales = getRandomSamples(males, numTests);
  const sampleFemales = getRandomSamples(females, numTests);

  const failures = [];


  sampleMales.forEach(name => {
    const features = prepareInput(name);
    const result = net.run(features);


    if (Number.isNaN(result.gender) || result.gender < 0.5) {
      failures.push({
        nome: name,
        generoReal: 'Masculino',
        redeAchaQueEh: Number.isNaN(result.gender) ? 'Indefinido (NaN)' : 'Feminino',
        certezaDoErro: Number.isNaN(result.gender) ? 'NaN%' : `${(result.gender * 100).toFixed(1)}%`
      });
    }
  });


  sampleFemales.forEach(name => {
    const features = prepareInput(name);
    const result = net.run(features);


    if (Number.isNaN(result.gender) || result.gender >= 0.5) {
      failures.push({
        nome: name,
        generoReal: 'Feminino',
        redeAchaQueEh: Number.isNaN(result.gender) ? 'Indefinido (NaN)' : 'Masculino',
        certezaDoErro: Number.isNaN(result.gender) ? 'NaN%' : `${((1 - result.gender) * 100).toFixed(1)}%`
      });
    }
  });


  if (failures.length === 0) {
    console.log("Tu fez algo errado, porque não encontrei nenhuma falha! Parabéns! 🎉\n");
  } else {
    console.log(`Encontradas ${failures.length} falhas em ${numTests * 2} testes (${((failures.length / (numTests * 2)) * 100).toFixed(1)}% de erro na amostra).\n`);
    console.log("Nomes que enganaram a IA:");
    console.table(failures);
  }
}

runAudit(1000);
