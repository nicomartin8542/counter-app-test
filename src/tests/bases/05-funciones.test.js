import { getUser, getUsuarioActivo } from "../../bases/05-funciones";

describe("Pruebas para 05-funciones.js", () => {
  test("getUser: Debe obtener un objeto", () => {
    const usuario = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const resultado = getUser();

    expect(resultado).toEqual(usuario);
  });

  test("getUserActive: Debe obtener un objeto pasando un parametro", () => {
    const nombre = "Jorge";
    const resultado = getUsuarioActivo(nombre);
    const usuario = {
      uid: "ABC567",
      username: nombre,
    };
    expect(resultado).toEqual(usuario);
  });
});
