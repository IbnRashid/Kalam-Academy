import React from "react";

const FeaturedCourse = ({ course }) => {
	return (
		<div className=" fc">
			<img className="fc-img" src={course.image} alt={course.name}/>
			<h5 className="fc-name">{course.name}</h5>
		</div>
	);
};

export default FeaturedCourse;
