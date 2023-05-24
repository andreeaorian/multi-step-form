import React, { useContext } from "react";
import { FormDataContext } from "../../context/formDataContext";
import ExtraOption from "./extraOption";

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

export default function Step3Content() {
	const { yearlyBilling, addOns, setAddOns } = useContext(FormDataContext);

	const selectOption = (title) => {
		const alreadyExists = addOns.find((x) => x.title === title);
		if (alreadyExists) {
			setAddOns([...addOns.filter((x) => x.title !== title)]);
		} else {
			const optionsSelected = allOptions.find((x) => x.title === title);
			setAddOns([...addOns, optionsSelected]);
		}
	};

	return (
		<div className="step3">
			<ExtraOption
				title={onlineService.title}
				description={onlineService.description}
				price={
					yearlyBilling ? onlineService.yearlyPrice : onlineService.monthlyPrice
				}
				select={() => selectOption(onlineService.title)}
			/>
			<ExtraOption
				title={largerStorage.title}
				description={largerStorage.description}
				price={
					yearlyBilling ? largerStorage.yearlyPrice : largerStorage.monthlyPrice
				}
				select={() => selectOption(largerStorage.title)}
			/>
			<ExtraOption
				title={customizableProfile.title}
				description={customizableProfile.description}
				price={
					yearlyBilling
						? customizableProfile.yearlyPrice
						: customizableProfile.monthlyPrice
				}
				select={() => selectOption(customizableProfile.title)}
			/>
		</div>
	);
}
