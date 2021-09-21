import React from "react";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas de CounterApp", () => {
  const wrapper = shallow(<CounterApp />);
  test("Debe de renderizar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe imprimir el valor pasado como parametro en los props", () => {
    const valor = "100";
    const valorParrafo = wrapper.find("h2").text().trim();
    expect(valorParrafo).toBe(valor);
  });

  test("", () => {});
});
