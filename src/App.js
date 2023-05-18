import { useState } from "react";
import "./App.scss";
import { Sidebar, Form } from "./components";
import { StepContext } from "./context/stepContext";

function App() {
	const increaseStep = () => {
		setStepIndex((prevState) => ({ index: prevState.index + 1, increaseStep }));
	};

	const [stepIndex, setStepIndex] = useState({ index: 1, increaseStep });

	return (
		<div className="app">
			<div className="container">
				<StepContext.Provider value={stepIndex}>
					<Sidebar />
					<Form />
				</StepContext.Provider>
			</div>
		</div>
	);
}

export default App;
