import { useContext } from "react";
import { FormDataContext } from "../../context/formDataContext";
import { StepContext } from "../../context/stepContext";

export default function FormButtons({ isBackVisible, isConfirm }) {
	const { stepIndex, increaseStep, decreaseStep } = useContext(StepContext);
	const { name, email, phone, setValidationErrors, confirm } =
		useContext(FormDataContext);

	const validate = () => {
		let errors = {};

		if (!name) {
			errors.name = ["This field is required"];
		}

		if (!email) {
			errors.email = ["This field is required"];
		} else {
			if (
				!email.match(
					/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
				)
			) {
				errors.email = ["Email is invalid"];
			}
		}

		if (!phone) {
			errors.phone = ["This field is required"];
		} else {
			if (!phone.match(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/)) {
				errors.phone = ["This phone number is invalid"];
			}
		}

		return errors;
	};

	const saveAndGoToNextStep = () => {
		if (stepIndex === 1) {
			const validationErrors = validate();
			setValidationErrors(validationErrors);

			if (Object.keys(validationErrors).length === 0) {
				increaseStep();
			}
			return;
		}

		increaseStep();
	};

	return (
		<div className="form-buttons">
			<button
				type="button"
				className={`back ${isBackVisible ? "" : "invisible"}`}
				onClick={decreaseStep}>
				Go Back
			</button>
			{isConfirm ? (
				<button type="button" className="submit" onClick={confirm}>
					Confirm
				</button>
			) : (
				<button type="button" className="submit" onClick={saveAndGoToNextStep}>
					Next Step
				</button>
			)}
		</div>
	);
}
