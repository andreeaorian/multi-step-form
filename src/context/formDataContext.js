import { createContext, useReducer } from "react";

const initialState = {
	name: "",
	email: "",
	phone: "",
	planType: "Arcade",
	price: 9,
	yearlyBilling: false,
	validationErrors: {},
	addOns: [],
};

const actions = {
	SET_PERSONAL_INFO: "SET_PERSONAL_INFO",
	SET_BILLING_PLAN: "SET_BILLING_PLAN",
	SET_ADD_ONS: "SET_ADD_ONS",
	SET_VALIDATION_ERRORS: "SET_VALIDATION_ERRORS",
};

const reducer = (state, action) => {
	switch (action.type) {
		case actions.SET_PERSONAL_INFO:
			return {
				...state,
				...action.payload,
			};
		case actions.SET_BILLING_PLAN:
			return {
				...state,
				...action.payload,
			};
		case actions.SET_ADD_ONS:
			return {
				...state,
				addOns: [...action.payload],
			};
		case actions.SET_VALIDATION_ERRORS:
			return {
				...state,
				validationErrors: { ...action.payload },
			};
		default:
			return state;
	}
};

export const FormDataContext = createContext();

export const FormDataContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const value = {
		name: state.name,
		email: state.email,
		phone: state.phone,
		planType: state.planType,
		price: state.price,
		yearlyBilling: state.yearlyBilling,
		addOns: state.addOns,
		validationErrors: state.validationErrors,
		setPersonalInfo: (personalInfo) => {
			dispatch({ type: actions.SET_PERSONAL_INFO, payload: personalInfo });
		},
		setBillingPlan: (billingPlan) => {
			dispatch({ type: actions.SET_BILLING_PLAN, payload: billingPlan });
		},
		setAddOns: (addOns) => {
			dispatch({ type: actions.SET_ADD_ONS, payload: addOns });
		},
		setValidationErrors: (errors) => {
			dispatch({ type: actions.SET_VALIDATION_ERRORS, payload: errors });
		},
	};

	return (
		<FormDataContext.Provider value={value}>
			{children}
		</FormDataContext.Provider>
	);
};
