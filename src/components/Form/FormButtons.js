import { useContext } from "react";
import { FormDataContext } from "../../context/formDataContext";
import { StepContext } from "../../context/stepContext";

export function FormButtons({ isBackVisible, isConfirm }) {
	const { increaseStep, decreaseStep } = useContext(StepContext);
	const { name, email, phone, setPersonalInfo } = useContext(FormDataContext);

	const saveAndGoToNextStep = () => {
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
				<button type="button" className="submit">
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
