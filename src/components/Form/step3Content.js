import React, { useContext, useState } from "react";

import { FormDataContext } from "../../context/formDataContext";
import { ExtraOption } from "./extraOption";

const onlineService = {
	title: "Online sevice",
	description: "Access to multiplayer games",
	monthlyPrice: 1,
	yearlyPrice: 10,
};
const largerStorage = {
	title: "Larger storage",
	description: "Extra 1TB of cloud save",
	monthlyPrice: 2,
	yearlyPrice: 20,
};
const customizableProfile = {
	title: "Customizable profile",
	description: "Custom theme on your profile",
	monthlyPrice: 2,
	yearlyPrice: 20,
};
const allOptions = [onlineService, largerStorage, customizableProfile];

export function Step3Content() {
	const { yearlyBilling } = useContext(FormDataContext);
	const [isSelected, setIsSelected] = useState(true);

	const selectOption = () => {
		setIsSelected((prevState) => !prevState);
	};

	return (
		<div className="step3">
			<ExtraOption
				title={onlineService.title}
				description={onlineService.description}
				price={
					yearlyBilling ? onlineService.yearlyPrice : onlineService.monthlyPrice
				}
				isYearly={yearlyBilling}
				isSelected={isSelected}
				select={selectOption}
			/>
			<ExtraOption
				title={largerStorage.title}
				description={largerStorage.description}
				price={
					yearlyBilling ? largerStorage.yearlyPrice : largerStorage.monthlyPrice
				}
				isYearly={yearlyBilling}
				isSelected={false}
			/>
			<ExtraOption
				title={customizableProfile.title}
				description={customizableProfile.description}
				price={
					yearlyBilling
						? customizableProfile.yearlyPrice
						: customizableProfile.monthlyPrice
				}
				isYearly={yearlyBilling}
				isSelected={false}
			/>
		</div>
	);
}
