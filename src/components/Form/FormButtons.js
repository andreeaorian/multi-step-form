import { useContext } from "react";
import { StepContext } from "../../context/stepContext";

export function FormButtons({ isBackVisible, isConfirm }) {
	const step = useContext(StepContext);
	return (
		<div className="form-buttons">
			<button
				type="button"
				className={`back ${isBackVisible ? "" : "invisible"}`}>
				Go Back
			</button>
			{isConfirm ? (
				<button type="button" className="submit">
					Confirm
				</button>
			) : (
				<button type="button" className="submit" onClick={step.increaseStep}>
					Next Step
				</button>
			)}
		</div>
	);
}
