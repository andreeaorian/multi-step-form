import { useContext } from "react";
import { FormDataContext } from "../../../context/formDataContext";

export default function FormInput({
	label,
	value,
	type,
	id,
	name,
	placeholder,
	onChange,
}) {
	const { validationErrors } = useContext(FormDataContext);
	const isValid = !!validationErrors && !!validationErrors[id];

	return (
		<div className="group">
			<label className="label-error" htmlFor={id}>
				{label}
				{isValid && <span className="error">{validationErrors[id]}</span>}
			</label>
			<input
				className={isValid ? "error" : ""}
				type={type}
				id={id}
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				defaultValue={value}
				required
			/>
		</div>
	);
}
