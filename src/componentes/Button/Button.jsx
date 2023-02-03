import React from "react";
import "./button.css";

export default function Button(props) {
    let [colorState , setColorState] = React.useState ()

    let styleButton = {
        padding: props.padding,
        backgroundColor: colorState, 
    };

    function handleClick(evt){
        setColorState("black");
    };
    return(
        <button onClick= { handleClick } style= {styleButton} className="btn">
            {props.children}
        </button>
    );
}
