import React from "react";
import Hanger from "./hanger";
import TrafficLight from "./trafficLight";

//create your first component
const Home = () => {
	return (
		<div className="d-flex justify-content-center">
			<div style={{width: "500px"}}>
				<Hanger/>
				<TrafficLight/>
			</div>
		</div>
	);
};

export default Home;
