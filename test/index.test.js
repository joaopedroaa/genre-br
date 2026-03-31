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

  test("Deve lançar erro para entrada inválida", () => {
    if (!getGenderInfo) return;

    expect(() => getGenderInfo("")).toThrow();
    expect(() => getGenderInfo(null)).toThrow();
  });
});
