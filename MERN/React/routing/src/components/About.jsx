import React from "react";
import { useParams } from "react-router-dom";

const About =()=>{
    const {word } = useParams();
    return(
        <>
        
        {   
            isNaN(word) ? <h3>The word is {word}</h3> :
            <h3> The number is : {word}</h3>
        }
        
        </>
    )
}

export default About;