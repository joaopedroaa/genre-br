const { sanitizeName } = require("../utils/sanitizeName");

 describe("sanitizeName", () => {
    test("Deve extrair e sanitizar o primeiro nome", () => {
      expect(sanitizeName("João Pedro da Silva")).toBe("joao");
    });

    test("Deve converter para minúsculas", () => {
      expect(sanitizeName("MARIA")).toBe("maria");
    });

    test("Deve remover acentos", () => {
      expect(sanitizeName("Conceição")).toBe("conceicao");
    });

    test("Deve remover caracteres não-alfabéticos", () => {
      expect(sanitizeName("Ana-Clara")).toBe("anaclara");
    });

    test("Deve lidar com espaços extras", () => {
      expect(sanitizeName("  Fernanda  Souza  ")).toBe("fernanda");
    });

    test("Deve lançar erro para entrada vazia", () => {
      expect(() => sanitizeName("")).toThrow();
    });

    test("Deve lançar erro para entrada não-string", () => {
      expect(() => sanitizeName(null)).toThrow();
      expect(() => sanitizeName(undefined)).toThrow();
      expect(() => sanitizeName(123)).toThrow();
    });
  });
