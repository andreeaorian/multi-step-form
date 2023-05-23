export function ExtraOption({
	title,
	description,
	price,
	isYearly,
	isSelected,
	select,
}) {
	return (
		<button
			className={`extra-option ${isSelected ? "selected" : ""}`}
			onClick={select}>
			<input
				className="option-checkbox"
				type="checkbox"
				defaultChecked={isSelected}
			/>
			<div className="option-text">
				<div className="option-title">{title}</div>
				<div className="option-description">{description}</div>
			</div>
			<div className="option-price">{`+$${price}${
				isYearly ? "/yr" : "/mo"
			}`}</div>
		</button>
	);
}
