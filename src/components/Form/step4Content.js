import React, { useContext } from "react";

import { FormDataContext } from "../../context/formDataContext";

export function Step4Content() {
	const { planType, price, yearlyBilling, addOns } =
		useContext(FormDataContext);

	const calculateTotalPrice = () => {
		let totalPrice = price;

		addOns.forEach((x) => {
			totalPrice += yearlyBilling ? x.yearlyPrice : x.monthlyPrice;
		});

		return totalPrice;
	};

	return (
		<div className="step4">
			<div className="summarize"></div>
			<div className="total-price">
				<span className="title">{` Total (${
					yearlyBilling ? "per year" : "per month"
				})`}</span>
				<span className="price">{`+${calculateTotalPrice()}$/${
					yearlyBilling ? "yr" : "mo"
				}`}</span>
			</div>
		</div>
	);
}
