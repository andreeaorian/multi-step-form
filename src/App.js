import { useContext } from "react";
import "./App.scss";
import { Sidebar, Form } from "./components";
import { StepContext } from "./context/stepContext";

function App() {
	const stepIndex = useContext(StepContext);

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
