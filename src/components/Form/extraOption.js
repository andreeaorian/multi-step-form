import { useContext } from "react";
import { FormDataContext } from "../../context/formDataContext";

export function ExtraOption({ title, description, price, select }) {
	const { yearlyBilling, addOns } = useContext(FormDataContext);
	const isSelected = !!addOns?.find((x) => x.title === title);

	return (
		<div className={`extra-option ${isSelected ? "selected" : ""}`}>
			<input
				className="option-checkbox"
				type="checkbox"
				value={isSelected}
				onChange={select}
			/>
			<div className="option-text">
				<div className="option-title">{title}</div>
				<div className="option-description">{description}</div>
			</div>
			<div className="option-price">{`+$${price}${
				yearlyBilling ? "/yr" : "/mo"
			}`}</div>
		</div>
	);
}
