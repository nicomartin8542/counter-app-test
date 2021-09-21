import { shallow } from "enzyme";
import React from "react";

import PrimeraApp from "../PrimeraApp";

describe("Pruebas en <PrimeraApp/>", () => {
  test("Debe mostrar <PrimeraApp/> correctamente", () => {
    const saludo = "Hola soy Nico";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar un subtitulo pasado por props", () => {
    const subtitulo = "Agregando subtitulo";

    const wrapper = shallow(
      <PrimeraApp saludo="Hola Soy Nico" subtitulo={subtitulo} />
    );
    const textoParrafo = wrapper.find("p").text();

    expect(textoParrafo).toBe(subtitulo);
  });

  /*  test('Debe de mostrar el mensaje "Hola, Soy Nico"', () => {
    const saludos = "Hola, soy Nico";

    const { getByText } = render(<PrimeraApp saludo={saludos} />);

    expect(getByText(saludos)).toBeInTheDocument();
  }); */
});
