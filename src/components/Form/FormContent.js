import { Step1Content } from "./Step1Content";

export function FormContent({ stepIndex }) {
	return (
		<div className="form-content">{stepIndex === 1 && <Step1Content />}</div>
	);
}
