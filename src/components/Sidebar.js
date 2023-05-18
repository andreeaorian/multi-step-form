import { StepButton } from "./StepButton";

export function Sidebar() {
	return (
		<div className="sidebar">
			<StepButton stepIndex={1} title="Your info" />
			<StepButton stepIndex={2} title="Select plan" />
			<StepButton stepIndex={3} title="Add-ons" />
			<StepButton stepIndex={4} title="Summary" />
		</div>
	);
}
