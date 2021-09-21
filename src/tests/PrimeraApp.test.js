import {render} from "@testing-library/react";
import React from "react";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en <PrimeraApp/>", () => {
	test('Debe de mostrar el mensaje "Hola, Soy Nico"', () => {
		const saludos = "Hola, soy Nico";

		const {getByText} = render(<PrimeraApp saludo={saludos} />);

		expect(getByText(saludos)).toBeInTheDocument();
	});
});
