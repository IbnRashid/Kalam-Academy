import React from "react";

const FeaturedCourse = ({ course }) => {
	return (
		<div className="card">
			{/* <img className="card-img" src={course.image} alt={course.name} /> */}
			<div className="card-img"></div>
			<div className="card-details">
				<h5 className="fc-name">{course.name}</h5>
				<p>{course.shortDescription}</p>
				<div className="fc-bottom">
					<div className="profile">
						{/* <img
						src={course.profilePic}
						alt={course.teacher}
						className="profile-pic"
					/> */}
						<h5>{course.teacher}</h5>
					</div>
					<div className="fc-price">
						<h5>${course.price}</h5>
					</div>
				</div>
				
			</div>
			<div className="card-button">
				<h1>TAKE COURSE</h1>
			</div>
		</div>
	);
};

export default FeaturedCourse;
