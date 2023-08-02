import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { Form } from "../components";
import { FormDataContext } from "../context/formDataContext";
import { StepContext } from "../context/stepContext";

describe("Form", () => {
	const setupForm = (formDataContext, stepContext) => {
		const FormContextProviderWrapper = ({ children }) => (
			<FormDataContext.Provider value={formDataContext}>
				{children}
			</FormDataContext.Provider>
		);
		const StepContextProviderWrapper = ({ children }) => (
			<StepContext.Provider value={stepContext}>
				<FormContextProviderWrapper>{children}</FormContextProviderWrapper>
			</StepContext.Provider>
		);

		return render(<Form />, {
			wrapper: StepContextProviderWrapper,
		});
	};
	test("renders Confirmation message when isConfirmed is true", () => {
		const formDataContext = { isConfirmed: true };
		const stepContext = { stepIndex: 1 };
		const { container } = setupForm(formDataContext, stepContext);

		expect(
			container.querySelector(".confirmation-message")
		).toBeInTheDocument();
	});

	test("renders Form when isConfirmed is false", () => {
		const formDataContext = { isConfirmed: false };
		const stepContext = { stepIndex: 1 };
		const { container } = setupForm(formDataContext, stepContext);

		expect(container.querySelector(".form")).toBeInTheDocument();
		expect(container.querySelector(".form-buttons")).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: /Personal Info/i })
		).toBeInTheDocument();
	});

	test("renders back and next buttons", () => {
		const formDataContext = { isConfirmed: false };
		const stepContext = { stepIndex: 2 };
		const { container } = setupForm(formDataContext, stepContext);

		expect(container.querySelector(".form")).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: /Select your plan/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: /Go Back/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: /Next Step/i })
		).toBeInTheDocument();
	});

	test("form validation fails for missing required fields", async () => {
		let formDataContext = {
			name: "",
			email: "",
			phone: "",
			isConfirmed: false,
			validationErrors: {
				name: "This field is required",
				email: "This field is required",
				phone: "This field is required",
			},
			setValidationErrors: jest.fn(),
		};
		let stepContext = { stepIndex: 1 };
		setupForm(formDataContext, stepContext);

		fireEvent.click(screen.getByRole("button", { name: /Next Step/i }));

		expect(screen.getAllByText("This field is required")).toHaveLength(3);
	});
});
