
const fs = require('node:fs');
const path = require('node:path');
const { sanitizeName } = require('../src/utils');
const malesPath = path.join(__dirname, '../data/male.json');
const femalesPath = path.join(__dirname, '../data/female.json');

const rawMales = JSON.parse(fs.readFileSync(malesPath, 'utf8'));
const rawFemales = JSON.parse(fs.readFileSync(femalesPath, 'utf8'));

console.log(`Dados originais -> Masculinos: ${rawMales.length} | Femininos: ${rawFemales.length}`);
const maleSet = new Set(rawMales.map(name => sanitizeName(name)));
const femaleSet = new Set(rawFemales.map(name => sanitizeName(name)));

const cleanMales = [];
const cleanFemales = [];
let removedCount = 0;

rawMales.forEach(name => {
  const cleanName = sanitizeName(name);
  if (!femaleSet.has(cleanName)) {
    cleanMales.push(name);
  } else {
    removedCount++;
  }
});
rawFemales.forEach(name => {
  const cleanName = sanitizeName(name);
  if (!maleSet.has(cleanName)) {
    cleanFemales.push(name);
  } else {
  }
});

console.log(`Removidos ${removedCount} nomes ambíguos/cruzados que confundiriam a IA.`);
console.log(`Dados LIMPOS -> Masculinos: ${cleanMales.length} | Femininos: ${cleanFemales.length}`);
fs.writeFileSync(path.join(__dirname, '../data/male_c.json'), JSON.stringify(cleanMales, null, 2));
fs.writeFileSync(path.join(__dirname, '../data/female_c.json'), JSON.stringify(cleanFemales, null, 2));
console.log("Arquivos _c.json gerados com sucesso!");
