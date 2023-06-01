import "./App.scss";
import { Sidebar, Form } from "./components";
import { FormDataContextProvider } from "./context/formDataContext";
import { StepContextProvider } from "./context/stepContext";
import useDisplaySize from "./hooks/useDisplaySize";

function App() {
	const isMobile = useDisplaySize();
	const desktopView = (
		<div className="container">
			<Sidebar />
			<Form />
		</div>
	);
	const mobileView = (
		<>
			<Sidebar />
			<Form />
		</>
	);

	return (
		<div className="app">
			<StepContextProvider>
				<FormDataContextProvider>
					{isMobile ? mobileView : desktopView}
				</FormDataContextProvider>
			</StepContextProvider>
		</div>
	);
}

export default App;
