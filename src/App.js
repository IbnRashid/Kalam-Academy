import React from "react";
import Navbar from "./Navbar";
import MainHero from "./MainHero";
import Partners from "./Partners"
import Process from "./Process"
function App() {
	return (
		<>
			<Navbar />
			<main>
				<MainHero />
				{/* <Partners/> */}
				<Process/>
			</main>
		</>
	);
}

export default App;
