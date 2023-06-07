import { createContext, useReducer } from "react";

const initialState = 1;

const actions = {
	INCREASE_STEP: "INCREASE_STEP",
	DECREASE_STEP: "DECREASE_STEP",
	CHANGE_STEP: "CHANGE_STEP",
};

const reducer = (state, action) => {
	switch (action.type) {
		case actions.INCREASE_STEP:
			return state + 1;
		case actions.DECREASE_STEP:
			return state - 1;

		case actions.CHANGE_STEP:
			return action.payload;
		default:
			return state;
	}
};

export const StepContext = createContext();

export const StepContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const value = {
		stepIndex: state,
		increaseStep: () => {
			dispatch({ type: actions.INCREASE_STEP });
		},
		decreaseStep: () => {
			dispatch({ type: actions.DECREASE_STEP });
		},
		changeStep: (step) => {
			dispatch({ type: actions.CHANGE_STEP, payload: step });
		},
	};

	return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
};
