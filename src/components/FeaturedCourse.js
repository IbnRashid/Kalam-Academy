import React from "react";

const FeaturedCourse = ({ course }) => {
	return (
		<div className=" fc">
			<img className="fc-img" src={course.image} alt={course.name} />
			<h5 className="fc-name">{course.name}</h5>
			<p>{course.shortDescription}</p>
			<div className="fc-bottom">
				<div className="profile">
					<img
						src={course.profilePic}
						alt={course.teacher}
						className="profile-pic"
					/>
					<h5>{course.teacher}</h5>
				</div>
				<div className="fc-price">
					<h5>${course.price}</h5>
				</div>
			</div>
			<div className="fc-button"><h1>TAKE COURSE</h1></div>
		</div>
	);
};

export default FeaturedCourse;
