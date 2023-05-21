export function PlanBox({ icon: Icon, title, price, isYearly }) {
	return (
		<button className="plan-box">
			<Icon width={40} height={40} className="plan-icon" />
			<div className="plan-title">{title}</div>
			<div className="plan-price">{`$${price}/${
				isYearly ? "/yr" : "/mo"
			}`}</div>
			<div className="plan-discount" hidden={!isYearly}>
				2 months free
			</div>
		</button>
	);
}
