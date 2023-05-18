import { createContext } from "react";

export const StepContext = createContext({
	index: 0,
	increaseStep: () => {},
});
