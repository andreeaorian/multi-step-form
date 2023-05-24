import { useContext } from "react";
import { FormDataContext } from "../../context/formDataContext";
import FormInput from "./formInput";

export default function Step1Content() {
	const { name, email, phone, setPersonalInfo } = useContext(FormDataContext);

	const setName = ({ target: { value } }) => {
		setPersonalInfo({ name: value });
	};

	const setEmail = ({ target: { value } }) => {
		setPersonalInfo({ email: value });
	};

	const setPhone = ({ target: { value } }) => {
		setPersonalInfo({ phone: value });
	};

	return (
		<form className="step1">
			<FormInput
				label="Name"
				id="name"
				type="text"
				placeholder="e.g. Stephen King"
				onChange={setName}
				value={name}
			/>

			<FormInput
				label="Email Address"
				id="email"
				type="email"
				placeholder="e.g. stephenking@lorem.com"
				onChange={setEmail}
				value={email}
			/>

			<FormInput
				label="Phone Number"
				id="phone"
				type="phone"
				placeholder="e.g. +1 234 567 890"
				onChange={setPhone}
				value={phone}
			/>
		</form>
	);
}
