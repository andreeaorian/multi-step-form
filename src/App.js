import "./App.scss";
import { Sidebar, Form } from "./components";

function App() {
	return (
		<div className="app">
			<div className="container">
				<Sidebar />
				<Form />
			</div>
		</div>
	);
}

export default App;
