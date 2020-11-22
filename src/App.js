import React from "react";
import Navbar from "./Navbar";
import MainHero from "./Home/MainHero";
import Partners from "./Home/Partners"
import Process from "./Home/Process"
import Footer from "./Footer"
function App() {
	return (
		<>
			<Navbar />
			<main>
				<MainHero />
				{/* <Partners/> */}
				<Process/>
				<Footer/>
			</main>
		</>
	);
}

export default App;
