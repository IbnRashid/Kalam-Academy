import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";

function App() {
	return (
		<Router>
				<Header />
			<HomeScreen />
			<Footer/>
		</Router>
	);
}

export default App;
