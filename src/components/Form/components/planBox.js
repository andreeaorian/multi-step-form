export default function PlanBox({
	icon: Icon,
	title,
	price,
	isYearly,
	isSelected,
	select,
}) {
	return (
		<div
			className={`plan-box ${isSelected ? "selected" : ""}`}
			onClick={select}>
			<Icon className="plan-icon" />
			<div className="plan-content">
				<div className="plan-title">{title}</div>
				<div className="plan-price">{`$${price}${
					isYearly ? "/yr" : "/mo"
				}`}</div>
				{isYearly && <div className="plan-discount">2 months free</div>}
			</div>
		</div>
	);
}
