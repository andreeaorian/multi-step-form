export function StepButton({ stepIndex, title }) {
	return (
		<div className="step-button">
			<div className="step-index">{stepIndex}</div>
			<div className="step-number">Step {stepIndex}</div>
			<div className="step-title">{title}</div>
		</div>
	);
}
