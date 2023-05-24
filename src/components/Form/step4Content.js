import React, { useContext } from "react";

import { FormDataContext } from "../../context/formDataContext";
import { StepContext } from "../../context/stepContext";

export function Step4Content() {
	const { planType, price, yearlyBilling, addOns } =
		useContext(FormDataContext);
	const { changeStep } = useContext(StepContext);
	const priceDisplay = `/${yearlyBilling ? "yr" : "mo"}`;

	const calculateTotalPrice = () => {
		let totalPrice = price;

		addOns.forEach((x) => {
			totalPrice += yearlyBilling ? x.yearlyPrice : x.monthlyPrice;
		});

		return totalPrice;
	};

	const goToPlanStep = () => {
		changeStep(2);
	};

	return (
		<div className="step4">
			<div className="summarize">
				<div className="plan-details">
					<div className="plan-details-title">
						<div>{`${planType} (${yearlyBilling ? "Yearly" : "Monthly"})`}</div>
						<div className="change-button" onClick={goToPlanStep}>
							Change
						</div>
					</div>
					<div className="plan-details-price">{`$${price}${priceDisplay}`}</div>
				</div>
				<div className="add-ons-details">
					{addOns.map((x) => {
						return (
							<div className="add-on" key={x.title}>
								<div>{x.title}</div>
								<div className="add-on-price">{`+$${
									yearlyBilling ? x.yearlyPrice : x.monthlyPrice
								}${priceDisplay}`}</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="total-price">
				<span className="title">{` Total (${
					yearlyBilling ? "per year" : "per month"
				})`}</span>
				<span className="price">{`+$${calculateTotalPrice()}${priceDisplay}`}</span>
			</div>
		</div>
	);
}
