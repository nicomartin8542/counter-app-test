import { retornaArreglo } from "../../bases/07-deses-arr";

describe("Prueba en 07-deses-arr.js", () => {
  test("retornaArreglo: Debe retornar un string y un numero", () => {
    const [letras, numeros] = retornaArreglo();

    expect(letras).toBe("ABC");
    expect(typeof letras).toBe("string");

    expect(numeros).toBe(123);
    expect(typeof numeros).toBe("number");
  });
});
