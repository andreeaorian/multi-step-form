import { useContext } from "react";
import { FormDataContext } from "../../../context/formDataContext";
import FormInput from "./formInput";

export default function Step1Content() {
	const { name, email, phone, setPersonalInfo } = useContext(FormDataContext);

	const setData = ({ target: { value, name } }) => {
		setPersonalInfo({ [name]: value });
	};

	return (
		<form className="step1">
			<FormInput
				label="Name"
				id="name"
				name="name"
				type="text"
				placeholder="e.g. Stephen King"
				onChange={setData}
				value={name}
			/>

			<FormInput
				label="Email Address"
				id="email"
				type="email"
				name="email"
				placeholder="e.g. stephenking@lorem.com"
				onChange={setData}
				value={email}
			/>

			<FormInput
				label="Phone Number"
				id="phone"
				type="phone"
				name="phone"
				placeholder="e.g. +1 234 567 890"
				onChange={setData}
				value={phone}
			/>
		</form>
	);
}
