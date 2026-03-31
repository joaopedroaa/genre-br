const { getGenderInfo } = require('../src/index');

const names = [
  // Nomes originais
  "João",
  "Maria",
  "José",
  "Ana",
  "Pedro",
  "Lia",
  "Carlos",
  "Jéssica",
  "Anderson da Silva",
  "Maria Eduarda",
  "João Pedro",
  "Carlos Eduardo",
  "Luiz Henrique da Costa",
  "Vitória",
  "Letícia",
  "Fernanda",
  "Ana Clara",
  "Mário",
  "Lucas",
  "Bia",
  "Paulo",
  "Juliana",
  "Marcos",
  "Camila",
  "Luca",
  "Ariel",
  "Duda",
  "Manu",
  "Cris",
  "Dani",
  "Sasha",
  "Darcy",
  "Rene",
  "Alex",
  "Alison",
  "Dominique",
  "Jaci"
];

console.log("\nVerificando nomes comuns que passam:\n");

const results = names.map(name => {
  const info = getGenderInfo(name);
  return {
    nome: info.name,
    redeAchaQueEh: info.female ? 'Feminino' : 'Masculino',
    certeza: info.certainty
  };
});

console.table(results);
