import React from "react";
import img from "./main-hero-img.png";
import carrer from "../images/carrer.svg";
import offt from "../images/offt.svg";
import pl from "../images/pl.svg";
import skills from "../images/skills.svg";
import courses from "../courses";
import FeaturedCourse from "../components/FeaturedCourse";

// function stars() {
// 	let count = 500;
// 	const scene = document.querySelector(".main-hero");
// 	let i = 0;
// 	while (i < count) {
// 		const star = document.createElement("i");
// 		let x = Math.floor(Math.random() * window.innerWidth);
// 		let y = Math.floor(Math.random() * window.innerHeight);
// 		let duration = Math.random() * 10;
// 		let size = Math.random() * 2;

// 		star.style.left = x + "px";
// 		star.style.top = y + "px";
// 		star.style.width = 1 + size + "px";
// 		star.style.height = 1 + size + "px";
// 		console.log(star);
// 		console.log(scene);
// 		scene.appendChild(star);
// 		i++;
// 	}
// }

const HomeScreen = () => {
	return (
		<>
			<div className="main-hero">
				<div id="stars"></div>
				<div id="stars2"></div>
				<div id="stars3"></div>
			</div>
			<div className="sponsers"></div>
			<div className="sunrise">
				<div className="categories"></div>
				<div className="tree"></div>
			</div>
			<div className="process">
				<h2 className="text-center main-process-text">
					How Kalam Academy Works
				</h2>
				<ul className="main-process text-center">
					<li>
						<img src={carrer} alt="bruh" className="process-img" />
						<div className="process-title">Carrer Opportunities</div>Start your
						carrer in high demand feilds like it, marketing
					</li>
					<li>
						<img src={pl} alt="bruh" className="process-img" />
						<div className="process-title">Personalised Learning</div>Choose
						your prefered learning venue from online, live and on site
					</li>
					<li>
						<img src={skills} alt="bruh" className="process-img" />
						<div className="process-title">New Skills</div>Learn the latest
						skills like programming, web design, business analytics and much
						more
					</li>
					<li>
						<img src={offt} alt="bruh" className="process-img" />
						<div className="process-title">Off-The-Job Training</div>Upskill
						your organization with on-demand training and development programs
					</li>
				</ul>
			</div>
			<div className="featured-courses">
				<h2 className="text-center main-process-text">Featured Courses</h2>
				<div className="featc">
					{courses.slice(2, 5).map((course) => (
						<div key={course._id}>
							<FeaturedCourse course={course} />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

// stars();

export default HomeScreen;
