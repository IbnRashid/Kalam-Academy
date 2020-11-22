import React, { useState, useRef, useEffect } from "react";
import test from "./test.png"

const Process = () => {
	return (
		<div className="process">
			<div>
				<h2 className="process-text">our process</h2>
			</div>

			<ul className="process-container">
				<li>
					<img src={test} alt="" />
					<div>
						<h4>something</h4>
						<p>something something something something something something something something something something something something</p>
					</div>
				</li>
				<li>
					<img src={test} alt="" />
					<div>
						<h4>something</h4>
						<p>something something something something something something something something something something something something</p>
					</div>
				</li>
				<li>
					<img src={test} alt="" />
					<div>
						<h4>something</h4>
						<p>something something something something something something something something something something something something</p>
					</div>
				</li>
				<li>
					<img src={test} alt="" />
					<div>
						<h4>something</h4>
						<p>something something something something something something something something something something something something</p>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Process;
