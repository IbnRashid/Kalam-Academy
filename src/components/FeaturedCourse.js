import React from "react";

const FeaturedCourse = ({ course }) => {
	return (
		<div className=" fc">
			<img className="fc-img" src={course.image} alt={course.name} />
			<div className="fc-top">
				<h5 className="fc-name">{course.name}</h5>
				{/* <img src={course.profilePic} alt={course.teacher} className="profile-pic"/> */}
			</div>
			<p>{course.shortDescription}</p>
		</div>
	);
};

export default FeaturedCourse;
