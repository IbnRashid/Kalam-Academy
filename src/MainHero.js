import React, { useState, useRef, useEffect } from "react";
import rtk from "./rtk.svg"

const MainHero = () => {
	return (
		<div className="main-hero">
			<div className="main-hero-text">
				<h2>your road to knowledge starts here</h2>
				<p>Build skills with courses from experts around the globe</p>
			</div>
            <img className="main-hero-img" src={rtk} alt=""/>
		</div>
	);
};

export default MainHero;
