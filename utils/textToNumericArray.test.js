const { textToNumericArray } = require("./textToNumericArray");

describe("textToNumericArray", () => {
  test("Deve converter cada caractere em one-hot encoding de tamanho 27", () => {
    const result = textToNumericArray("a");
    expect(result).toHaveLength(27);
    expect(result[0]).toBe(1);
    expect(result[1]).toBe(0);
  });

  test("Deve converter espaço corretamente", () => {
    const result = textToNumericArray(" ");
    expect(result[26]).toBe(1);
  });

  test("Deve retornar array de tamanho proporcional à string (length * 27)", () => {
    const result = textToNumericArray("  ana");
    expect(result).toHaveLength(5 * 27);
  });

  test("Cada valor deve ser 0 ou 1", () => {
    const result = textToNumericArray("ana");
    result.forEach((value) => {
      expect(value === 0 || value === 1).toBeTruthy();
    });
  });
});
