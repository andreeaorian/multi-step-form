import { useContext } from "react";
import { FormDataContext } from "../../context/formDataContext";
import { StepContext } from "../../context/stepContext";
import { ConfirmationMessage } from "./confirmationMessage";
import { FormButtons } from "./formButtons";
import { FormContent } from "./formContent";
import { FormTitle } from "./formTitle";

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

export function Form() {
	const { stepIndex } = useContext(StepContext);
	const { isConfirmed } = useContext(FormDataContext);
	const titleOject = formTitles.find((x) => x.id === stepIndex);
	return (
		<>
			<div className={`form ${isConfirmed ? "hidden" : ""}`}>
				<FormTitle title={titleOject.title} subtitle={titleOject.subtitle} />
				<FormContent />
				<FormButtons
					isBackVisible={stepIndex !== 1}
					isConfirm={stepIndex === 4}
				/>
			</div>
			<ConfirmationMessage />
		</>
	);
}
