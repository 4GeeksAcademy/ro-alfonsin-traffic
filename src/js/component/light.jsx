import React from "react";

function Light(props){
    let colorClass = props.colorClass;
    const buttonBasicClasses = "btn w-75 rounded-circle mx-auto border-0";
    let buttonClasses = colorClass + buttonBasicClasses;

    return(
        <div className="row" style={{height: "150px"}}>
            <button type="button" className={buttonClasses}></button>
        </div>
    );
    
}

export default Light;