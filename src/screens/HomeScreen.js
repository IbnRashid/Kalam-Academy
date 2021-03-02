import React from "react";
import img from "./main-hero-img.png";
import MainTop from "../images/MainTop";
import carrer from "../images/carrer.svg";
import offt from "../images/offt.svg";
import pl from "../images/pl.svg";
import skills from "../images/skills.svg";
import courses from "../courses";
import FeaturedCourse from "../components/FeaturedCourse";
import { Link } from "react-router-dom";
import img1 from "../components/logo.svg";

const HomeScreen = () => {
	return (
		<>
			<div className="main-hero">
				<nav className="header">
					<Link to="/">
						<img className="logo" src={img1} alt="#" />
					</Link>
					<div>
						<Link className="nav-link" to="/courses">
							<h3>COURSES</h3>
						</Link>
						<Link className="nav-link" to="/about-us">
							<h3>ABOUT</h3>
						</Link>
						<Link className="nav-link login" to="#">
							<h3>LOGIN</h3>
						</Link>
					</div>
				</nav>
				{/* <div className="header-container">
				<div className="main-header">Your Path to Knowledge Starts here</div>
				</div> */}
				<MainTop/>


				{/* <div className=""></div> */}

				{/* <div className="click">
					helo
				</div> */}
			</div>

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
			<div className="sponsers">
				<h1>Our Sponsers</h1>
			</div>
			<div className="featured-courses">
				{/* <h2 className="text-center main-process-text">Featured Courses</h2> */}
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

export default HomeScreen;
