import React from "react";
import { Card } from "react-bootstrap";

const FeaturedCourse = ({ course }) => {
	return (
		<div className=" fc">
			<img className="fcimg" src={course.image} />
			<h4>{course.name}</h4>
		</div>
	);
};

export default FeaturedCourse;
