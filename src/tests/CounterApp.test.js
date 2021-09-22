import React from "react";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas de CounterApp", () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("Debe de renderizar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe imprimir el valor pasado como parametro en los props", () => {
    const valor = 100;
    const wrapper = shallow(<CounterApp value={valor} />);
    const valorParrafo = wrapper.find("h2").text().trim();
    expect(valorParrafo).toBe("100");
  });

  test("Debe de incrementar en valor en +1", () => {
    wrapper.find("button").at(0).simulate("click");
    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("11");
  });

  test("Debe de restar el valor en -1", () => {
    wrapper.find("button").at(2).simulate("click");
    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("9");
  });

  test("Debe hacer reset el valor", () => {
    const wrapper = shallow(<CounterApp value={105} />);
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("105");
  });
});
