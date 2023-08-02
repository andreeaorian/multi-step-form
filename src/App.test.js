import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

jest.mock("./hooks/useDisplaySize", () => {
	return {
		__esModule: true,
		default: jest.fn().mockReturnValue(false),
	};
});

test("renders desktop view when isMobile is false", () => {
	const { container } = render(<App />);

	expect(container.querySelector(".container")).toBeInTheDocument();
	expect(container.querySelector(".sidebar")).toBeInTheDocument();
	expect(container.querySelector(".form")).toBeInTheDocument();
});

test("renders mobile view when isMobile is true", () => {
	jest.mock("./hooks/useDisplaySize", () => {
		return {
			__esModule: true,
			default: jest.fn().mockReturnValue(true),
		};
	});

	const { container } = render(<App />);

	expect(container.querySelector(".sidebar")).toBeInTheDocument();
	expect(container.querySelector(".form")).toBeInTheDocument();
});
