import React from "react";
import img from "./main-hero-img.png";

const HomeScreen = () => {
	return (
		<>
			<div className="main-hero">
				<div className="main-hero-container">
					<div className="main-hero-text">
						<p className="hero-title">
							Your Road To Knowledge Starts Here
						</p>
						<p>
							Build your skills with our courses from experts around the world
						</p>
						<button type="button" class="btn btn-primary">
							button
						</button>
					</div>
					<img class="main-hero-img" src={img} />
				</div>
			</div>
			<div className="process">
				<h2 className="text-center">Our Process</h2>
			</div>
		</>
	);
};

export default HomeScreen;
