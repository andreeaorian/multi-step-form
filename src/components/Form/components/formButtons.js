import { useContext } from "react";
import { FormDataContext } from "../../../context/formDataContext";
import { StepContext } from "../../../context/stepContext";
import { validateForm } from "../../../utils/validator";

export default function FormButtons({ isBackVisible, isConfirm }) {
	const { stepIndex, increaseStep, decreaseStep } = useContext(StepContext);
	const { name, email, phone, setValidationErrors, confirm } =
		useContext(FormDataContext);

	const saveAndGoToNextStep = () => {
		if (stepIndex === 1) {
			const validationErrors = validateForm(name, email, phone);
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
				<button type="button" onClick={saveAndGoToNextStep}>
					Next Step
				</button>
			)}
		</div>
	);
}
