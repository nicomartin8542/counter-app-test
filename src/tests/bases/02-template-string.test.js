import { getSaludo } from "../../bases/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
  test("getSaludo: Debe retornar hola fernando", () => {
    const nombre = "fernando";

    const resultado = getSaludo(nombre);

    expect(resultado).toBe(`Hola ${nombre}`);
  });

  test("getSaludo: Debe retornar Hola Nico, sin pasarle parametros", () => {
    const resultado = getSaludo();

    expect(resultado).toBe("Hola Nico");
  });
});
