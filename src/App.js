import "./App.scss";
import { Sidebar, Form } from "./components";
import { FormDataContextProvider } from "./context/formDataContext";
import { StepContextProvider } from "./context/stepContext";

function App() {
	return (
		<div className="app">
			<div className="container">
				<StepContextProvider>
					<FormDataContextProvider>
						<Sidebar />
						<Form />
					</FormDataContextProvider>
				</StepContextProvider>
			</div>
		</div>
	);
}

export default App;
