import { useContext } from "react";
import { StepContext } from "../../context/stepContext";

export function StepButton({ step, title }) {
	const { stepIndex } = useContext(StepContext);
	return (
		<div className="step-button">
			<div className={`step-index ${step === stepIndex ? "active" : ""}`}>
				{step}
			</div>
			<div className="step-number">Step {step}</div>
			<div className="step-title">{title}</div>
		</div>
	);
}
