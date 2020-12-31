import React from "react";
import img from "./main-hero-img.png";
import p_img from "./favicon.svg";
import { Col } from "react-bootstrap";
import courses from "../courses"
import FeaturedCourse from "../components/FeaturedCourse"

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
					</div>
					<img className="main-hero-img" src={img} alt="cool-stuff" />
				</div>
			</div>
			<div className="process">
				<h2 className="text-center main-process-text">
					How Kalam Academy Works
				</h2>
				<ul className="main-process text-center">
					<li>
						<img src={p_img} alt="bruh" />
						<div>carrer opportunities</div>start your carrer in high demand feilds like it, marketing
					</li>
					<li>
						<img src={p_img} alt="bruh" />
						<div>personalised learning</div>choose your prefered learning venue from online, live and on site
					</li>
					<li>
						<img src={p_img} alt="bruh" />
						<div>new skills</div>learn the latest skills like programming, web design, business analytics and much more
					</li>
					<li>
						<img src={p_img} alt="bruh" />
						<div>off the job training</div>upskill your organization with on-demand training and development programs
					</li>
				</ul>
			</div>
			<div className="featured-courses">
				<h2 className="text-center main-process-text">Featured Courses</h2>
				<div className="featc">
				{courses.slice(2, 5).map(course => (
					<Col key={course._id}>
						<FeaturedCourse course={course}/>
					</Col>
                ))}
			</div>
			</div>
		</>
	);
};

export default HomeScreen;
