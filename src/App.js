import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
// import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen"
import AboutScreen from "./screens/AboutScreen"
import CoursesScreen from "./screens/CoursesScreen"
// import Header from "./components/Header";

function App() {
	return (
		<Router>
			{/* <Header/> */}
			<main>
				<Route path="/" component={HomeScreen} exact/>
				<Route path="/about-us" component={AboutScreen} exact/>
				<Route path="/courses" component={CoursesScreen} exact/>
			</main>
			{/* <Footer /> */}
		</Router>
	);
}


export default App;
