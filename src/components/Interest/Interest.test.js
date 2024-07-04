import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Interest from "./Interest";

test("initially renders collapsed list", () => {
	const { queryByTestId, queryByText } = render(<Interest />);
	const interestList = queryByTestId("interest-list");
	expect(interestList).toHaveStyle("maxHeight: 0px");

	// Verifico que los elementos no estén presentes en la lista inicialmente
	expect(queryByText(/E-commerce y Marketplaces/i)).toBeNull();
	expect(
		queryByText(/Continuous Integration and Continuous Deployment/i)
	).toBeNull();
	expect(queryByText(/Agile methodologies/i)).toBeNull();
	expect(queryByText(/Blockchain y Cryptocurrencies/i)).toBeNull();
	expect(queryByText(/Proyectos Open Source/i)).toBeNull();
	expect(queryByText(/Cybersecurity/i)).toBeNull();
});

test("expands list on click", () => {
	const { getByText, queryByTestId, queryByText } = render(<Interest />);
	const titleElement = getByText(/Interests/i);
	fireEvent.click(titleElement);
	const interestList = queryByTestId("interest-list");

	// Verifico que la lista se expande y que los elementos están presentes
	expect(interestList).toHaveStyle(`maxHeight: ${interestList.scrollHeight}px`);
	expect(queryByText(/E-commerce y Marketplaces/i)).toBeInTheDocument();
	expect(
		queryByText(/Continuous Integration and Continuous Deployment/i)
	).toBeInTheDocument();
	expect(queryByText(/Agile methodologies/i)).toBeInTheDocument();
	expect(queryByText(/Blockchain y Cryptocurrencies/i)).toBeInTheDocument();
	expect(queryByText(/Proyectos Open Source/i)).toBeInTheDocument();
	expect(queryByText(/Cybersecurity/i)).toBeInTheDocument();
});
