const { getLastChars } = require("./getLastChars");

  describe("getLastChars", () => {
    test("Deve retornar os últimos 7 caracteres de um nome longo", () => {
      expect(getLastChars("fernanda")).toBe("ernanda");
    });

    test("Deve preencher com espaços à esquerda se o nome for curto", () => {
      expect(getLastChars("ana")).toBe("    ana");
    });

    test("Deve retornar exatamente 7 caracteres", () => {
      expect(getLastChars("ana").length).toBe(7);
      expect(getLastChars("fernanda").length).toBe(7);
      expect(getLastChars("a").length).toBe(7);
    });

    test("Deve lidar com nome de exatamente 7 caracteres", () => {
      expect(getLastChars("mariana")).toBe("mariana");
    });

    test("Deve aceitar um comprimento customizado", () => {
      expect(getLastChars("ana", 5)).toBe("  ana");
    });
  });
