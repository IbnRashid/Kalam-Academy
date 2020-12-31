import React from "react";

const FeaturedCourse = ({ course }) => {
	return (
		<div className=" fc">
			<img className="fcimg" src={course.image} alt={course.name}/>
			<h4>{course.name}</h4>
		</div>
	);
};

export default FeaturedCourse;
