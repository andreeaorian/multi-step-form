import "./App.scss";
import { Sidebar, Form } from "./components";
import { StepContextProvider } from "./context/stepContext";

function App() {
	return (
		<div className="app">
			<div className="container">
				<StepContextProvider>
					<Sidebar />
					<Form />
				</StepContextProvider>
			</div>
		</div>
	);
}

export default App;
