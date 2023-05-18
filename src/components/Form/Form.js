import { FormButtons } from "./FormButtons";
import { FormContent } from "./FormContent";
import { FormTitle } from "./FormTitle";

export function Form() {
	return (
		<div className="form">
			<FormTitle
				title="Personal info"
				subtitle="Please provide your name, email address, and phone number."
			/>
			<FormContent />
			<FormButtons isBackVisible={false} isConfirm={false} />
		</div>
	);
}
