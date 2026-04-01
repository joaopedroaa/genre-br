const { getGenderInfo } = require('../src/index');

const names = [
  "João",
  "Maria",
  "Ana",
  "Pedro",
  "Carlos",
  "Paulo",
  "Alison",
  "Sasha",
  "Ana Clara",
  "Mário",
  "Duda",
  "Juliana",
  "Igor",
  "Leonardo",
  "Marcelo",
  "Rafael",
  "Guilherme",
  "Renato",
  "Ricardo",
  "Eduardo",
  "Marcos",
  "Camila",
  "Bruno",
  "Caio",
  "Fernando",
  "Letícia",
  "Beatriz",
  "Mariana",
  "Anderson da Silva",
  "Maria Eduarda",
  "João Pedro",
  "Carlos Eduardo",
  "Luiz Henrique da Costa",
  "Vitória",
  "Jéssica",
  "Fernanda",
  "Clara",
  "Luana",
  "Lia",
  "José",
  "Lucas",
  "Bia",
  "Luca",
  "Ariel",
  "Manu",
  "Cris",
  "Dani",
  "Darcy",
  "Rene",
  "Alex",
  "Dominique",
  "Jaci",
  "Daniel",
  "Diego",
  "Felipe",
  "Gabriel",
  "Matheus",
  "Gustavo",
  "Henrique",
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
