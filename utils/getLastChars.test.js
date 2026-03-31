const { getLastChars } = require("./getLastChars");

  describe("getLastChars", () => {
    test("Deve retornar os últimos 5 caracteres de um nome longo", () => {
      expect(getLastChars("fernanda")).toBe("nanda");
    });

    test("Deve preencher com espaços à esquerda se o nome for curto", () => {
      expect(getLastChars("ana")).toBe("  ana");
    });

    test("Deve retornar exatamente 5 caracteres", () => {
      expect(getLastChars("ana").length).toBe(5);
      expect(getLastChars("fernanda").length).toBe(5);
      expect(getLastChars("a").length).toBe(5);
    });

    test("Deve lidar com nome de exatamente 5 caracteres", () => {
      expect(getLastChars("maria")).toBe("maria");
    });

    test("Deve aceitar um comprimento customizado", () => {
      expect(getLastChars("ana", 7)).toBe("    ana");
    });
  });
