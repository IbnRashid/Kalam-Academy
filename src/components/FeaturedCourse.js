import React from "react";
import { Card } from "react-bootstrap";

const FeaturedCourse = ({ course }) => {
	return (
		<div className=" fc">
			<img className="fcimg" src={course.image} />
		</div>
	);
};

export default FeaturedCourse;
