import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders form and submits correctly", () => {
	const mockOnFormSubmit = jest.fn();
	const { getByLabelText, getByText } = render(
		<ContactForm onFormSubmit={mockOnFormSubmit} />
	);

	// Simulo la entrada de datos en el formulario
	fireEvent.change(getByLabelText(/Name:/i), { target: { value: "Juan" } });
	fireEvent.change(getByLabelText(/Email:/i), {
		target: { value: "juan@example.com" },
	});

	// Simulo el envío del formulario
	fireEvent.submit(getByText(/Submit/i));

	// Verifico que se llama a onFormSubmit
	expect(mockOnFormSubmit).toHaveBeenCalled();
});
