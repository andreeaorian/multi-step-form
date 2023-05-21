import React, { useState } from "react";
import { PlanBox } from "./planBox";
import { ReactComponent as ArcadeIcon } from "../../assets/img/icon-arcade.svg";
import { ReactComponent as AdvancedIcon } from "../../assets/img/icon-advanced.svg";
import { ReactComponent as ProIcon } from "../../assets/img/icon-pro.svg";

export function Step2Content() {
	const [isYearlyBilling, setIsYearlyBilling] = useState(false);
	const changeBilling = () => {
		setIsYearlyBilling((prevState) => {
			return !prevState;
		});
	};

	return (
		<div className="step2">
			<div className="step2-plans">
				<PlanBox
					icon={ArcadeIcon}
					title="Arcade"
					price={90}
					isYearly={isYearlyBilling}
				/>
				<PlanBox
					icon={AdvancedIcon}
					title="Advanced"
					price={120}
					isYearly={isYearlyBilling}
				/>
				<PlanBox
					icon={ProIcon}
					title="Pro"
					price={150}
					isYearly={isYearlyBilling}
				/>
			</div>
			<div className="step2-billing">
				<label htmlFor="billingType" className="billing-toggle">
					<span
						className={`billing-monthly ${isYearlyBilling ? "gray" : "blue"}`}>
						Montly
					</span>
					<input
						className="billing-toggle-input"
						type="checkbox"
						id="billingType"
						value={isYearlyBilling}
						onChange={changeBilling}
					/>
					<span className="billing-toggle-handler" />
					<span
						className={`billing-yearly ${isYearlyBilling ? "blue" : "gray"}`}>
						Yearly
					</span>
				</label>
			</div>
		</div>
	);
}
