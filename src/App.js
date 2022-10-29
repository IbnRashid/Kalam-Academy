import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";

function App() {
	return (
		<Router>
				<Header />
			<HomeScreen />
		</Router>
	);
}

export default App;
