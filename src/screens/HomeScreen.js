import React from "react";
import img from "./main-hero-img.svg";

const HomeScreen = () => {
	return (
		<div className="main-hero">
			<div className="main-hero-container">
				<div className="main-hero-text">
					<p className="hero-title"><b>Your Road To Knowledge Starts Here</b></p>
					<p>
						build your skills with our courses from experts around the world
					</p>
                    <button type="button" class="btn btn-primary btn-lg">Large button</button>
				</div>
				<img class="main-hero-img" src={img} />
			</div>
		</div>
	);
};

export default HomeScreen;
