import React from "react";
import Light from "./light";
import { useState } from "react";

function TrafficLight(){
    
    const [currentState, setCurrentState] = useState(["bg-danger ", "bg-warning-subtle ", "bg-success-subtle "]);

    window.addEventListener("click", (e) =>{
        let classesString = e.target.className;
        
        if (classesString.includes("bg-danger-subtle")) setCurrentState(["bg-danger ", "bg-warning-subtle ", "bg-success-subtle "]);

        if (classesString.includes("bg-warning-subtle")) setCurrentState(["bg-danger-subtle ", "bg-warning ", "bg-success-subtle "]);

        if (classesString.includes("bg-success-subtle")) setCurrentState(["bg-danger-subtle ", "bg-warning-subtle ", "bg-success "]);
    });

    return(
        <div className="row" style={{height: "500px"}}>
            <div className="col">

            </div>
            <div className="col-5 bg-dark d-flex flex-column justify-content-around">
                <Light colorClass = {currentState[0]}/>
                <Light colorClass = {currentState[1]}/>
                <Light colorClass = {currentState[2]}/>
            </div>
            <div className="col">

            </div>
        </div>
    );
}

export default TrafficLight;