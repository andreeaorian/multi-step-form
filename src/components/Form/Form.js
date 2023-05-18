import { FormButtons } from "./FormButtons";
import { FormContent } from "./FormContent";
import { FormTitle } from "./FormTitle";

const formTitles = [
	{
		id: 1,
		title: "Personal info",
		subtitle: "Please provide your name, email address, and phone number.",
	},
	{
		id: 2,
		title: "Select your plan",
		subtitle: "You have the option of monthly or yearly billing.",
	},
	{
		id: 3,
		title: "Pick add-ons",
		subtitle: "Add-ons help enhance your gaming experience",
	},
	{
		id: 4,
		title: "Finishing up",
		subtitle: "Double-check everything looks OK before confirming.",
	},
];

export function Form({ stepIndex }) {
	const titleOject = formTitles.find((x) => x.id === stepIndex);
	return (
		<div className="form">
			<FormTitle title={titleOject.title} subtitle={titleOject.subtitle} />
			<FormContent stepIndex={stepIndex} />
			<FormButtons
				isBackVisible={stepIndex !== 1}
				isConfirm={stepIndex === 4}
			/>
		</div>
	);
}
