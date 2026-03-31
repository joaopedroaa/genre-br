const { prepareInput, INPUT_LENGTH } = require("./prepareInput");

describe("prepareInput", () => {
  test("Deve retornar um array numérico de INPUT_LENGTH elementos", () => {
    const result = prepareInput("João");
    expect(result).toHaveLength(INPUT_LENGTH);
  });

  test("Cada valor deve ser um número", () => {
    const result = prepareInput("Maria");
    result.forEach((value) => {
      expect(typeof value).toBe("number");
    });
  });
});
