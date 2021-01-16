import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
// import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen"
import Header2 from "./components/Header2";

function App() {
	return (
		<Router>
			<Header2/>
			<Header />
			<main>
				<Route path="/" component={HomeScreen} exact/>
			</main>
			<Footer />
		</Router>
	);
}


export default App;
