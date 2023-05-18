export function FormButtons({ isBackVisible, isConfirm }) {
	return (
		<div className="form-buttons">
			<button
				type="button"
				className={`back ${isBackVisible ? "" : "invisible"}`}>
				Go Back
			</button>
			<button type="button" className="submit">
				{isConfirm ? "Confirm" : "Next Step"}
			</button>
		</div>
	);
}
