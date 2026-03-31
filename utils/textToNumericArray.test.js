const { textToNumericArray } = require("./textToNumericArray");

describe("textToNumericArray", () => {
  test("Deve converter cada caractere em charCode / 1000", () => {
    const result = textToNumericArray("a");
    expect(result).toEqual([0.097]);
  });

  test("Deve converter espaço corretamente", () => {
    const result = textToNumericArray(" ");
    expect(result).toEqual([0.032]);
  });

  test("Deve retornar array com o mesmo comprimento da string", () => {
    const result = textToNumericArray("    ana");
    expect(result).toHaveLength(7);
  });

  test("Cada valor deve estar entre 0 e 1", () => {
    const result = textToNumericArray("    ana");
    result.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThan(1);
    });
  });
});
