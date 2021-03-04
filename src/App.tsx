import { Divider } from "antd";
import "./App.css";
import FormCreateAccount from "./components/formCreateAccount";
import Header from "./components/header";
import Notification from "./components/notification";

function App() {
	return (
		<div className="App">
			<Header />
			<Notification />
			<FormCreateAccount />
		</div>
	);
}

export default App;
