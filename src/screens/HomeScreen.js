import React, { useState } from "react";
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
import MainFooter from "../images/MainFooter";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const HomeScreen = () => {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);
	return (
		<>
			<div className="main-hero">
				<nav className="header">
					<Link to="/">
						<img className="logo" src={img1} alt="#" />
					</Link>
					<div className="HBM">
						<Link to="#" className="menu-bars" onClick={showSidebar}>
							{/* <h1>T</h1> */}
							<FaIcons.FaBars />
						</Link>
						<div className={sidebar ? "nav-menu active" : "nav-menu"}>
							<ul className="nav-menu-items">
								<li className="navbar-toggle">
									<Link to="#" className="x">
										<p onClick={showSidebar}>
											<svg
												width="59"
												height="59"
												viewBox="0 0 59 59"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="45.7634"
													y="16.772"
													width="41"
													height="4"
													rx="2"
													transform="rotate(135 45.7634 16.772)"
													fill="white"
												/>
												<rect
													x="16.0649"
													y="13.9437"
													width="41"
													height="4"
													rx="2"
													transform="rotate(45 16.0649 13.9437)"
													fill="white"
												/>
											</svg>
										</p>
									</Link>
								</li>
								<li className="nav-link">
									<Link to="/courses">
										<h3>COURSES</h3>
									</Link>
								</li>
								<li className="nav-link">
									<Link to="/about-us">
										<h3>ABOUT</h3>
									</Link>
								</li>
								<li className="nav-link">
									<Link className="login" to="#">
										<h3>LOGIN</h3>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				{/* <div className="header-container">
				<div className="main-header">Your Path to Knowledge Starts here</div>
				</div> */}
				<MainTop />

				{/* <div className=""></div> */}

				<h1 className="click">It's Never Too Late To Start Learning</h1>
			</div>

			<div className="process">
				<h2 className="main-process-text">How Kalam Academy Works</h2>
				<div className="main-process">
					<div className="main-process-left"></div>
					<div className="main-process-right">
						<ul>
							<li>
								<img src={carrer} alt="bruh" className="process-img" />
								<div className="process-title">Carrer Opportunities</div>Start
								your carrer in high demand feilds like it, marketing
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
								your organization with on-demand training and development
								programs
							</li>
						</ul>
					</div>
				</div>
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
			<MainFooter></MainFooter>
		</>
	);
};

export default HomeScreen;
