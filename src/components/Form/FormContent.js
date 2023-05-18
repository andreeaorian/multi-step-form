import { useContext } from "react";
import { StepContext } from "../../context/stepContext";
import { Step1Content } from "./step1Content";

export function FormContent() {
	const step = useContext(StepContext);
	return (
		<div className="form-content">{step.index === 1 && <Step1Content />}</div>
	);
}
