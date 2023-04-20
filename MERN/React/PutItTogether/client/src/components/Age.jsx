import React, {useState} from "react";

const Age = (props) => {
    const [ age, setAge ] = useState(props.age); 

    return (
        <div>
            <h1>{props.firstName}, {props.lastName}</h1>
            <p>Age: {age}</p>
            <p>Hair color: {props.hairColor}</p>
            <button onClick= { (event) => setAge(age + 1)}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
            )     
}

export default Age;