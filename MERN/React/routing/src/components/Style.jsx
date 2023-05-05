import React from "react";
import { useParams } from "react-router-dom";

const Style =()=>{
    const {word, color, background } = useParams();
    const mystyle = {
        color: color,
        backgroundColor: background
      };
      
    return(
        <>
        {   
            isNaN(word) ? <h3 style={mystyle}>The word is {word}</h3> :
            <h3 style={mystyle}> The number is : {word}</h3>
        }
        </>
    )
}
export default Style;