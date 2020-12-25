import React from "react";
import img from "./main-hero-img.png";
import p_img from "./favicon.svg";

const HomeScreen = () => {
	return (
		<>
			<div className="main-hero">
				<div className="main-hero-container">
					<div className="main-hero-text">
						<p className="hero-title">Your Road To Knowledge Starts Here</p>
						<p>
							Build your skills with our courses from experts around the world
						</p>
						<button type="button" className="btn btn-primary">
							button
						</button>
					</div>
					<img className="main-hero-img" src={img} alt="cool-stuff"/>
				</div>
			</div>
			<div className="process">
				<h2 className="text-center main-process-text">
					How Kalam Academy Works
				</h2>
				<ul className="main-process">
					<li>
						<img src={p_img} alt="bruh"/>
						How Kalam Academy Works How Kalam Academy WorksHow Kalam Academy
						Works
					</li>
					<li>
						<img src={p_img} alt="bruh"/>
						How Kalam Academy Works How Kalam Academy WorksHow Kalam Academy
						Works
					</li>
					<li>
						<img src={p_img} alt="bruh"/>
						How Kalam Academy Works How Kalam Academy WorksHow Kalam Academy
						Works
					</li>
					<li>
						<img src={p_img} alt="bruh"/>
						How Kalam Academy Works How Kalam Academy WorksHow Kalam Academy
						Works
					</li>
				</ul>
			</div>
			<div className="featured-courses">
				<h2 className="text-center main-process-text">Featured Courses</h2>
			</div>
		</>
	);
};

export default HomeScreen;