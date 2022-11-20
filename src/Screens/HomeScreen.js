import React from "react";
import { Link } from "react-router-dom";
import MainHeroImg from "../Images/main-hero-img";
import carrer from "../Images/carrer.svg";
import offt from "../Images/offt.svg";
import pl from "../Images/pl.svg";
import skills from "../Images/skills.svg";

const HomeScreen = () => {
	return (
		<>
			<div className="main-hero-section">
				{/* <Header/> */}
				{/* <div className="henlo"> testy mc testerson</div> */}
				<MainHeroImg />
				<h1 className="hero-txt">It's Never Too Late To Start Learning</h1>
				<div className="cta">
					<div>Featured Courses</div>
					<svg
						className="arrow"
						width="76"
						height="95"
						viewBox="0 0 76 95"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect x="32" width="11" height="85" fill="white" />
						<path
							d="M37.5 94.5L0 58.5H14L37.5 81L60 58.5H76L37.5 94.5Z"
							fill="white"
						/>
					</svg>
				</div>
			</div>
			<div className="process">
				<h2 className="text-center main-process-text">How we help you</h2>
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
			<div className="courses">
				<section class="card-list">
					<article class="card">
						<header class="card-header">
							<p>Sep 11th 2020</p>
							<h2>Never forget</h2>
						</header>

						<div class="card-author">
							<Link to="#" className="author-avatar">
								<img className="logo" alt="#" src="#" />
							</Link>
							<svg class="half-circle" viewBox="0 0 106 57">
								<path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
							</svg>

							<div class="author-name">
								<div class="author-name-prefix">Author</div>
								Jeff Delaney
							</div>
						</div>

						<div class="tags">
							<Link className="nav-link login" to="#">
								html
							</Link>
							<Link className="nav-link login" to="#">
								css
							</Link>
							<Link className="nav-link login" to="#">
								web-dev
							</Link>
						</div>
					</article>
					<article class="card">
						<header class="card-header">
							<p>Sep 11th 2020</p>
							<h2>Never forget</h2>
						</header>

						<div class="card-author">
							<Link to="#" className="author-avatar">
								<img className="logo" alt="#" src="#" />
							</Link>
							<svg class="half-circle" viewBox="0 0 106 57">
								<path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
							</svg>

							<div class="author-name">
								<div class="author-name-prefix">Author</div>
								Jeff Delaney
							</div>
						</div>

						<div class="tags">
							<Link className="nav-link login" to="#">
								html
							</Link>
							<Link className="nav-link login" to="#">
								css
							</Link>
							<Link className="nav-link login" to="#">
								web-dev
							</Link>
						</div>
					</article>
					<article class="card">
						<header class="card-header">
							<p>Sep 11th 2020</p>
							<h2>Never forget</h2>
						</header>

						<div class="card-author">
							<Link to="#" className="author-avatar">
								<img className="logo" alt="#" src="#" />
							</Link>
							<svg class="half-circle" viewBox="0 0 106 57">
								<path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
							</svg>

							<div class="author-name">
								<div class="author-name-prefix">Author</div>
								Jeff Delaney
							</div>
						</div>

						<div class="tags">
							<Link className="nav-link login" to="#">
								html
							</Link>
							<Link className="nav-link login" to="#">
								css
							</Link>
							<Link className="nav-link login" to="#">
								web-dev
							</Link>
						</div>
					</article>
					<article class="card">
						<header class="card-header">
							<p>Sep 11th 2020</p>
							<h2>Never forget</h2>
						</header>

						<div class="card-author">
							<Link to="#" className="author-avatar">
								<img className="logo" alt="#" src="#" />
							</Link>
							<svg class="half-circle" viewBox="0 0 106 57">
								<path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
							</svg>

							<div class="author-name">
								<div class="author-name-prefix">Author</div>
								Jeff Delaney
							</div>
						</div>

						<div class="tags">
							<Link className="nav-link login" to="#">
								html
							</Link>
							<Link className="nav-link login" to="#">
								css
							</Link>
							<Link className="nav-link login" to="#">
								web-dev
							</Link>
						</div>
					</article>
					<article class="card">
						<header class="card-header">
							<p>Sep 11th 2020</p>
							<h2>Never forget</h2>
						</header>

						<div class="card-author">
							<Link to="#" className="author-avatar">
								<img className="logo" alt="#" src="#" />
							</Link>
							<svg class="half-circle" viewBox="0 0 106 57">
								<path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
							</svg>

							<div class="author-name">
								<div class="author-name-prefix">Author</div>
								Jeff Delaney
							</div>
						</div>

						<div class="tags">
							<Link className="nav-link login" to="#">
								html
							</Link>
							<Link className="nav-link login" to="#">
								css
							</Link>
							<Link className="nav-link login" to="#">
								web-dev
							</Link>
						</div>
					</article>
				</section>
			</div>
			<div className="henlo"></div>
		</>
	);
};

export default HomeScreen;
