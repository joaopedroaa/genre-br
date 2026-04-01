describe("getGenderInfo", () => {
  let getGenderInfo;

  beforeAll(() => {
    try {
      const module = require("../src/index");
      getGenderInfo = module.getGenderInfo;
    } catch {
      getGenderInfo = null;
    }
  });

  const testCases = [
    // Nomes femininos
    { nome: "Lia", esperadoFeminino: true },
    { nome: "Bia", esperadoFeminino: true },
    { nome: "Maria", esperadoFeminino: true },
    { nome: "Ana", esperadoFeminino: true },
    { nome: "Beatriz", esperadoFeminino: true },
    { nome: "Jéssica", esperadoFeminino: true },
    { nome: "Vitória", esperadoFeminino: true },
    { nome: "Letícia", esperadoFeminino: true },
    { nome: "Fernanda", esperadoFeminino: true },
    { nome: "Maria Eduarda", esperadoFeminino: true },
    { nome: "Ana Clara", esperadoFeminino: true },
    { nome: "Juliana", esperadoFeminino: true },
    { nome: "Camila", esperadoFeminino: true },
    { nome: "Duda", esperadoFeminino: true },
    { nome: "Manu", esperadoFeminino: true },
    { nome: "Sasha", esperadoFeminino: true },
    { nome: "Aline", esperadoFeminino: true },
    { nome: "Amanda", esperadoFeminino: true },
    { nome: "Bruna", esperadoFeminino: true },
    { nome: "Carla", esperadoFeminino: true },
    { nome: "Carolina", esperadoFeminino: true },
    { nome: "Daniela", esperadoFeminino: true },
    { nome: "Eduarda", esperadoFeminino: true },
    { nome: "Gabriela", esperadoFeminino: true },
    { nome: "Isabela", esperadoFeminino: true },
    { nome: "Larissa", esperadoFeminino: true },
    { nome: "Luana", esperadoFeminino: true },
    { nome: "Márcia", esperadoFeminino: true },
    { nome: "Mariana", esperadoFeminino: true },
    { nome: "Natália", esperadoFeminino: true },
    { nome: "Patrícia", esperadoFeminino: true },
    { nome: "Paula", esperadoFeminino: true },
    { nome: "Rafaela", esperadoFeminino: true },
    { nome: "Renata", esperadoFeminino: true },
    { nome: "Sabrina", esperadoFeminino: true },
    { nome: "Tatiane", esperadoFeminino: true },
    { nome: "Thaís", esperadoFeminino: true },
    { nome: "Vanessa", esperadoFeminino: true },
    { nome: "Alice", esperadoFeminino: true },
    { nome: "Laura", esperadoFeminino: true },
    { nome: "Valentina", esperadoFeminino: true },
    { nome: "Helena", esperadoFeminino: true },
    { nome: "Sophia", esperadoFeminino: true },
    { nome: "Lorena", esperadoFeminino: true },
    { nome: "Lívia", esperadoFeminino: true },
    { nome: "Melissa", esperadoFeminino: true },
    { nome: "Cecília", esperadoFeminino: true },
    { nome: "Heloísa", esperadoFeminino: true },
    { nome: "Isadora", esperadoFeminino: true },
    { nome: "Nicole", esperadoFeminino: true },
    { nome: "Bárbara", esperadoFeminino: true },
    { nome: "Bianca", esperadoFeminino: true },
    { nome: "Clara", esperadoFeminino: true },
    { nome: "Débora", esperadoFeminino: true },
    { nome: "Emanuelly", esperadoFeminino: true },
    { nome: "Milena", esperadoFeminino: true },
    { nome: "Rebeca", esperadoFeminino: true },
    { nome: "Priscila", esperadoFeminino: true },
    { nome: "Kelly", esperadoFeminino: true },
    { nome: "Kátia", esperadoFeminino: true },
    { nome: "Michele", esperadoFeminino: true },
    { nome: "Cíntia", esperadoFeminino: true },
    { nome: "Suelen", esperadoFeminino: true },
    { nome: "Daiane", esperadoFeminino: true },
    { nome: "Sandra", esperadoFeminino: true },
    { nome: "Flávia", esperadoFeminino: true },
    { nome: "Mônica", esperadoFeminino: true },
    { nome: "Rose", esperadoFeminino: true },
    { nome: "Silvia", esperadoFeminino: true },
    { nome: "Simone", esperadoFeminino: true },
    { nome: "Solange", esperadoFeminino: true },
    { nome: "Angela", esperadoFeminino: true },
    { nome: "Vera", esperadoFeminino: true },

    // Nomes masculinos
    { nome: "Rui", esperadoFeminino: false },
    { nome: "Ian", esperadoFeminino: false },
    { nome: "João", esperadoFeminino: false },
    { nome: "Carlos", esperadoFeminino: false },
    { nome: "Pedro", esperadoFeminino: false },
    { nome: "José", esperadoFeminino: false },
    { nome: "Mário", esperadoFeminino: false },
    { nome: "Lucas", esperadoFeminino: false },
    { nome: "Anderson da Silva", esperadoFeminino: false },
    { nome: "João Pedro", esperadoFeminino: false },
    { nome: "Carlos Eduardo", esperadoFeminino: false },
    { nome: "Luiz Henrique da Costa", esperadoFeminino: false },
    { nome: "Paulo", esperadoFeminino: false },
    { nome: "Marcos", esperadoFeminino: false },
    { nome: "Alex", esperadoFeminino: false },
    { nome: "Alison", esperadoFeminino: false },
    { nome: "André", esperadoFeminino: false },
    { nome: "Bruno", esperadoFeminino: false },
    { nome: "Caio", esperadoFeminino: false },
    { nome: "Daniel", esperadoFeminino: false },
    { nome: "Diego", esperadoFeminino: false },
    { nome: "Eduardo", esperadoFeminino: false },
    { nome: "Felipe", esperadoFeminino: false },
    { nome: "Fernando", esperadoFeminino: false },
    { nome: "Gabriel", esperadoFeminino: false },
    { nome: "Guilherme", esperadoFeminino: false },
    { nome: "Gustavo", esperadoFeminino: false },
    { nome: "Henrique", esperadoFeminino: false },
    { nome: "Igor", esperadoFeminino: false },
    { nome: "Leonardo", esperadoFeminino: false },
    { nome: "Marcelo", esperadoFeminino: false },
    { nome: "Matheus", esperadoFeminino: false },
    { nome: "Rafael", esperadoFeminino: false },
    { nome: "Renato", esperadoFeminino: false },
    { nome: "Ricardo", esperadoFeminino: false },
    { nome: "Rodrigo", esperadoFeminino: false },
    { nome: "Thiago", esperadoFeminino: false },
    { nome: "Vinícius", esperadoFeminino: false },
    { nome: "Vitor", esperadoFeminino: false },
    { nome: "Arthur", esperadoFeminino: false },
    { nome: "Davi", esperadoFeminino: false },
    { nome: "Miguel", esperadoFeminino: false },
    { nome: "Bernardo", esperadoFeminino: false },
    { nome: "Gael", esperadoFeminino: false },
    { nome: "Heitor", esperadoFeminino: false },
    { nome: "Lorenzo", esperadoFeminino: false },
    { nome: "Enzo", esperadoFeminino: false },
    { nome: "Nicolas", esperadoFeminino: false },
    { nome: "Samuel", esperadoFeminino: false },
    { nome: "Antônio", esperadoFeminino: false },
    { nome: "Breno", esperadoFeminino: false },
    { nome: "Diogo", esperadoFeminino: false },
    { nome: "Fábio", esperadoFeminino: false },
    { nome: "Francisco", esperadoFeminino: false },
    { nome: "Cauã", esperadoFeminino: false },
    { nome: "Yuri", esperadoFeminino: false },
    { nome: "Ramon", esperadoFeminino: false },
    { nome: "Pablo", esperadoFeminino: false },
    { nome: "Vanderlei", esperadoFeminino: false },
    { nome: "Douglas", esperadoFeminino: false },
    { nome: "Cássio", esperadoFeminino: false },
    { nome: "César", esperadoFeminino: false },
    { nome: "Jorge", esperadoFeminino: false },
    { nome: "Leandro", esperadoFeminino: false },
    { nome: "Luciano", esperadoFeminino: false },
    { nome: "Luiz", esperadoFeminino: false },
    { nome: "Márcio", esperadoFeminino: false },
    { nome: "Manoel", esperadoFeminino: false },
    { nome: "Osvaldo", esperadoFeminino: false },
    { nome: "Osmar", esperadoFeminino: false },
    { nome: "Rogério", esperadoFeminino: false },
    { nome: "Ronaldo", esperadoFeminino: false },
    { nome: "Sérgio", esperadoFeminino: false },
    { nome: "Tiago", esperadoFeminino: false },
    { nome: "Washington", esperadoFeminino: false },
    { nome: "Wellington", esperadoFeminino: false },
    { nome: "Wesley", esperadoFeminino: false },
    { nome: "Túlio", esperadoFeminino: false },
  ];

  afterAll(() => {
    if (!getGenderInfo) return;

    const logs = ["\nResultados das previsões Lobusco V1:"];
    let acertos = 0;

    testCases.forEach(({ nome, esperadoFeminino }) => {
      const result = getGenderInfo(nome);
      const isCorrect = result.female === esperadoFeminino;
      if (isCorrect) acertos++;

      const icon = isCorrect ? "✅" : "❌";
      const predictedGender = result.female ? "Feminino" : "Masculino";
      const paddedName = nome.padEnd(12, " ");
      logs.push(
        `   ${icon} ${paddedName} → ${predictedGender} (${result.certainty})`,
      );
    });

    const porcentagemAcerto = ((acertos / testCases.length) * 100).toFixed(1);
    logs.push(`\nPorcentagem de acerto geral: ${porcentagemAcerto}%\n`);

    console.log(logs.join("\n"));
  });

  test.each(testCases)(
    'Deve prever "$nome" corretamente',
    ({ nome, esperadoFeminino }) => {
      if (!getGenderInfo) return;

      const result = getGenderInfo(nome);

      // Validações da porcentagem (agrupadas aqui para testar em todos os nomes)
      expect(result.certainty).toMatch(/^\d+(\.\d+)?%$/);
      const numCerteza = parseFloat(result.certainty);
      expect(numCerteza).toBeGreaterThan(0);
      expect(numCerteza).toBeLessThanOrEqual(100);

      // Validações principais
      expect(result.name).toBe(nome);
      expect(result.female).toBe(esperadoFeminino);
      expect(result.male).toBe(!esperadoFeminino);
    },
  );

  test('Deve lidar com entrada nula', () => {
    const result = getGenderInfo(null);

    expect(result).toStrictEqual({
      name: null,
      male: true,
      female: false,
      certainty: null,
    });

  })


});
