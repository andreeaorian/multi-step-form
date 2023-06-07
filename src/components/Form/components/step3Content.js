import React, { useContext } from "react";
import { FormDataContext } from "../../../context/formDataContext";
import ExtraOption from "./extraOption";

const allOptions = [
	{
		title: "Online sevice",
		description: "Access to multiplayer games",
		monthlyPrice: 1,
		yearlyPrice: 10,
	},
	{
		title: "Larger storage",
		description: "Extra 1TB of cloud save",
		monthlyPrice: 2,
		yearlyPrice: 20,
	},
	{
		title: "Customizable profile",
		description: "Custom theme on your profile",
		monthlyPrice: 2,
		yearlyPrice: 20,
	},
];

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
			{allOptions.map((option) => {
				return (
					<ExtraOption
						key={option.title}
						title={option.title}
						description={option.description}
						price={yearlyBilling ? option.yearlyPrice : option.monthlyPrice}
						select={() => selectOption(option.title)}
					/>
				);
			})}
		</div>
	);
}
