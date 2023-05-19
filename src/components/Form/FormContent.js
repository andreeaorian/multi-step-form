import { useContext } from "react";
import { StepContext } from "../../context/stepContext";
import { Step1Content } from "./step1Content";

export function FormContent() {
	const { stepIndex } = useContext(StepContext);
	return (
		<div className="form-content">{stepIndex === 1 && <Step1Content />}</div>
	);
}
