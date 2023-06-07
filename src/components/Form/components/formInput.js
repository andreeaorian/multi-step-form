import { useContext } from "react";
import { FormDataContext } from "../../../context/formDataContext";

export default function FormInput({
	label,
	value,
	type,
	id,
	placeholder,
	onChange,
}) {
	const { validationErrors } = useContext(FormDataContext);

	return (
		<div className="group">
			<label className="label-error" htmlFor={id}>
				{label}
				{!!validationErrors && !!validationErrors[id] && (
					<span className="error">{validationErrors[id]}</span>
				)}
			</label>
			<input
				className={!!validationErrors && !!validationErrors[id] ? "error" : ""}
				type={type}
				id={id}
				placeholder={placeholder}
				onChange={onChange}
				defaultValue={value}
				required
			/>
		</div>
	);
}
