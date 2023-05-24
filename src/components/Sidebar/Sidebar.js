import StepButton from "./stepButton";

export default function Sidebar() {
	return (
		<div className="sidebar">
			<StepButton step={1} title="Your info" />
			<StepButton step={2} title="Select plan" />
			<StepButton step={3} title="Add-ons" />
			<StepButton step={4} title="Summary" />
		</div>
	);
}
