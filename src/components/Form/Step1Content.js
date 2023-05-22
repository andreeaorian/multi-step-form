import { useContext } from "react";
import { FormDataContext } from "../../context/formDataContext";

export function Step1Content() {
	const { setPersonalInfo } = useContext(FormDataContext);

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
			<div className="group">
				<label htmlFor="name">Name</label> <br />
				<input
					type="text"
					id="name"
					name="name"
					placeholder="e.g. Stephen King"
					onChange={setName}
					required
				/>
			</div>

			<div className="group">
				<label htmlFor="email">Email Address</label> <br />
				<input
					type="email"
					id="email"
					name="email"
					placeholder="e.g. stephenking@lorem.com"
					onChange={setEmail}
					required
				/>
			</div>

			<div className="group">
				<label htmlFor="phone">Phone Number</label> <br />
				<input
					type="text"
					id="phone"
					name="phone"
					placeholder="e.g. +1 234 567 890"
					onChange={setPhone}
					required
				/>
			</div>
		</form>
	);
}
