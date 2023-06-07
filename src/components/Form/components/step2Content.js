import React, { useContext } from "react";
import PlanBox from "./planBox";
import { FormDataContext } from "../../../context/formDataContext";

import { ReactComponent as ArcadeIcon } from "../../../assets/img/icon-arcade.svg";
import { ReactComponent as AdvancedIcon } from "../../../assets/img/icon-advanced.svg";
import { ReactComponent as ProIcon } from "../../../assets/img/icon-pro.svg";

const allPlans = [
	{
		icon: ArcadeIcon,
		title: "Arcade",
		monthlyPrice: 9,
		yearlyPrice: 90,
	},
	{
		icon: AdvancedIcon,
		title: "Advanced",
		monthlyPrice: 12,
		yearlyPrice: 120,
	},
	{
		icon: ProIcon,
		title: "Pro",
		monthlyPrice: 15,
		yearlyPrice: 150,
	},
];

export default function Step2Content() {
	const { planType, yearlyBilling, setBillingPlan } =
		useContext(FormDataContext);

	const changeBilling = (e) => {
		setBillingPlan({ yearlyBilling: e.target.checked });
	};

	const choosePlan = (title) => {
		const selectedPlan = allPlans.find((x) => x.title === title);
		const price = yearlyBilling
			? selectedPlan.yearlyPrice
			: selectedPlan.monthlyPrice;

		setBillingPlan({
			planType: selectedPlan.title,
			price: price,
		});
	};

	return (
		<div className="step2">
			<div className="step2-plans">
				{allPlans.map((plan) => {
					return (
						<PlanBox
							key={plan.title}
							icon={plan.icon}
							title={plan.title}
							price={yearlyBilling ? plan.yearlyPrice : plan.monthlyPrice}
							isYearly={yearlyBilling}
							isSelected={planType === plan.title}
							select={() => choosePlan(plan.title)}
						/>
					);
				})}
			</div>
			<div className="step2-billing">
				<label htmlFor="billingType" className="billing-toggle">
					<span
						className={`billing-monthly ${yearlyBilling ? "gray" : "blue"}`}>
						Montly
					</span>
					<input
						className="billing-toggle-input"
						type="checkbox"
						id="billingType"
						checked={yearlyBilling}
						onChange={changeBilling}
					/>
					<span className="billing-toggle-handler" />
					<span className={`billing-yearly ${yearlyBilling ? "blue" : "gray"}`}>
						Yearly
					</span>
				</label>
			</div>
		</div>
	);
}
