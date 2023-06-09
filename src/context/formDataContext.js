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
	isConfirmed: false,
};

const actions = {
	SET_PERSONAL_INFO: "SET_PERSONAL_INFO",
	SET_BILLING_PLAN: "SET_BILLING_PLAN",
	SET_ADD_ONS: "SET_ADD_ONS",
	SET_VALIDATION_ERRORS: "SET_VALIDATION_ERRORS",
	CONFIRM: "CONFIRM",
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
		case actions.CONFIRM: {
			return {
				...state,
				isConfirmed: true,
			};
		}
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
		isConfirmed: state.isConfirmed,
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
		confirm: () => {
			dispatch({ type: actions.CONFIRM });
		},
		calculateTotalPrice: () => {
			let totalPrice = state.price;

			state.addOns.forEach((x) => {
				totalPrice += state.yearlyBilling ? x.yearlyPrice : x.monthlyPrice;
			});

			return totalPrice;
		},
	};

	return (
		<FormDataContext.Provider value={value}>
			{children}
		</FormDataContext.Provider>
	);
};
