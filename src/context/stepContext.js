import { createContext, useReducer } from "react";

const initialState = {
	stepIndex: 1,
};

const actions = {
	INCREASE_STEP: "INCREASE_STEP",
	DECREASE_STEP: "DECREASE_STEP",
};

const reducer = (state, action) => {
	switch (action.type) {
		case actions.INCREASE_STEP:
			return {
				...state,
				stepIndex: state.stepIndex + 1,
			};
		case actions.DECREASE_STEP:
			return {
				...state,
				stepIndex: state.stepIndex - 1,
			};
		default:
			return state;
	}
};

export const StepContext = createContext();

export const StepContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const value = {
		stepIndex: state.stepIndex,
		increaseStep: () => {
			dispatch({ type: actions.INCREASE_STEP });
		},
		decreaseStep: () => {
			dispatch({ type: actions.DECREASE_STEP });
		},
	};

	return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
};
