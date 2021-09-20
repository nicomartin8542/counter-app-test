import { getHeroeById, getHeroesByOwner } from "../../bases/08-imp-exp";
import heroes from "../../config/heroes";

describe("Prueba 08-imp-exp.js", () => {
  test("Debe de retornar un heroe por id", () => {
    const id = 2;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("Debe de retornar undefine si un heroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("Debe de retornar un arreglo de heroes de DC", () => {
    const owner = "DC";
    const heroeDC = getHeroesByOwner(owner);
    const heroeDCData = heroes.filter((h) => h.owner === owner);

    expect(heroeDC).toEqual(heroeDCData);
  });

  test("Debe de retornar el mismo length de un arreglo de heroes de MARVEL", () => {
    const owner = "Marvel";
    const heroeMARVEL = getHeroesByOwner(owner);

    expect(heroeMARVEL.length).toBe(2);
  });
});
