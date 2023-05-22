import { createContext, useReducer } from "react";

const initialState = {
	name: "",
	email: "",
	phone: "",
	planType: "Arcade",
	pricePerMonth: 9,
	yearlyBilling: false,
	addOns: [],
};

const actions = {
	SET_PERSONAL_INFO: "SET_PERSONAL_INFO",
	SET_BILLING_PLAN: "SET_BILLING_PLAN",
	SET_ADD_ONS: "SET_ADD_ONS",
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
				addOns: [...state.addOns, ...action.payload],
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
		pricePerMonth: state.pricePerMonth,
		yearlyBilling: state.yearlyBilling,
		addOns: state.addOns,
		setPersonalInfo: (personalInfo) => {
			dispatch({ type: actions.SET_PERSONAL_INFO, payload: personalInfo });
		},
		setBillingPlan: (billingPlan) => {
			dispatch({ type: actions.SET_BILLING_PLAN, payload: billingPlan });
		},
		setAddOns: (addOns) => {
			dispatch({ type: actions.SET_ADD_ONS, payload: addOns });
		},
	};

	return (
		<FormDataContext.Provider value={value}>
			{children}
		</FormDataContext.Provider>
	);
};
