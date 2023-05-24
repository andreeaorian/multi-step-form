import React, { useContext } from "react";
import PlanBox from "./planBox";
import { FormDataContext } from "../../context/formDataContext";

import { ReactComponent as ArcadeIcon } from "../../assets/img/icon-arcade.svg";
import { ReactComponent as AdvancedIcon } from "../../assets/img/icon-advanced.svg";
import { ReactComponent as ProIcon } from "../../assets/img/icon-pro.svg";

const arcadePlan = {
	title: "Arcade",
	monthlyPrice: 9,
	yearlyPrice: 90,
};
const advancedPlan = {
	title: "Advanced",
	monthlyPrice: 12,
	yearlyPrice: 120,
};
const proPlan = {
	title: "Pro",
	monthlyPrice: 15,
	yearlyPrice: 150,
};
const allPlans = [arcadePlan, advancedPlan, proPlan];

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
				<PlanBox
					icon={ArcadeIcon}
					title={arcadePlan.title}
					price={
						yearlyBilling ? arcadePlan.yearlyPrice : arcadePlan.monthlyPrice
					}
					isYearly={yearlyBilling}
					isSelected={planType === arcadePlan.title}
					select={() => choosePlan(arcadePlan.title)}
				/>
				<PlanBox
					icon={AdvancedIcon}
					title={advancedPlan.title}
					price={
						yearlyBilling ? advancedPlan.yearlyPrice : advancedPlan.monthlyPrice
					}
					isYearly={yearlyBilling}
					isSelected={planType === advancedPlan.title}
					select={() => choosePlan(advancedPlan.title)}
				/>
				<PlanBox
					icon={ProIcon}
					title={proPlan.title}
					price={yearlyBilling ? proPlan.yearlyPrice : proPlan.monthlyPrice}
					isYearly={yearlyBilling}
					isSelected={planType === proPlan.title}
					select={() => choosePlan(proPlan.title)}
				/>
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
