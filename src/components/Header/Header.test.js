import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from "./Header";

test("renders header with correct title", () => {
	const { getByText } = render(<Header />);
	const titleElement = getByText(/Juan Nicolas Fiakosky/i);
	expect(titleElement).toBeInTheDocument();
});

test("renders contact info correctly", () => {
	const { getByText } = render(<Header />);
	const cityElement = getByText(/Córdoba, Argentina/i);
	const emailElement = getByText(/jfiakosky@hotmail.com/i);
	const phoneElement = getByText(/###-#######/i);
	expect(cityElement).toBeInTheDocument();
	expect(emailElement).toBeInTheDocument();
	expect(phoneElement).toBeInTheDocument();
});
