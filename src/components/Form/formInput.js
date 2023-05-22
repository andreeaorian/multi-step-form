export function FormInput({ label, value, type, id, placeholder, onChange }) {
	return (
		<div className="group">
			<label htmlFor={id}>{label}</label> <br />
			<input
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
