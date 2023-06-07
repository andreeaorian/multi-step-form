import useDisplaySize from "../../../hooks/useDisplaySize";

export default function PlanBox({
	icon: Icon,
	title,
	price,
	isYearly,
	isSelected,
	select,
}) {
	const isMobile = useDisplaySize();
	const imageSize = isMobile ? 30 : 40;

	return (
		<button
			className={`plan-box ${isSelected ? "selected" : ""}`}
			onClick={select}>
			<Icon width={imageSize} height={imageSize} className="plan-icon" />
			<div className="plan-content">
				<div className="plan-title">{title}</div>
				<div className="plan-price">{`$${price}${
					isYearly ? "/yr" : "/mo"
				}`}</div>
				<div className="plan-discount" hidden={!isYearly}>
					2 months free
				</div>
			</div>
		</button>
	);
}
