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
						<button type="button" class="btn btn-primary">
							button
						</button>
					</div>
					<img class="main-hero-img" src={img} />
				</div>
			</div>
			<div className="process">
				<h2 className="text-center main-process-text">
					How Kalam Academy Works
				</h2>
				<ul className="main-process">
					<li><img src={p_img}/>How Kalam Academy Works How Kalam Academy WorksHow Kalam Academy Works</li>
					<li><img src={p_img}/>How Kalam Academy Works How Kalam Academy WorksHow Kalam Academy Works</li>
					<li><img src={p_img}/>How Kalam Academy Works How Kalam Academy WorksHow Kalam Academy Works</li>
					<li><img src={p_img}/>How Kalam Academy Works How Kalam Academy WorksHow Kalam Academy Works</li>
				</ul>
			</div>
		</>
	);
};

export default HomeScreen;
