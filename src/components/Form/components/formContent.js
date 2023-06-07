import { useContext } from "react";
import { StepContext } from "../../../context/stepContext";
import Step1Content from "./step1Content";
import Step2Content from "./step2Content";
import Step3Content from "./step3Content";
import Step4Content from "./step4Content";

export default function FormContent() {
	const { stepIndex } = useContext(StepContext);
	return (
		<div className="form-content">
			{stepIndex === 1 && <Step1Content />}
			{stepIndex === 2 && <Step2Content />}
			{stepIndex === 3 && <Step3Content />}
			{stepIndex === 4 && <Step4Content />}
		</div>
	);
}
