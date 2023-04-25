import React, {useState} from "react";
import Pet from "./Pet";


function Age(props) {
    const {firstName, lastName, hairColor, pet, onRemovePet } = props
    const [ age, setAge ] = useState(props.age);

    return (
        <div>
            <h1>{firstName}, {lastName}</h1>
            <p>Age: {age}</p>
            <p>Hair color: {hairColor}</p>
            <button onClick= { (event) => setAge(age + 1)}>Birthday Button for {firstName} {lastName}</button>
            <h3>Kafshet e {firstName} :</h3>
            {pet ? pet.map((pet) => <Pet emri={pet.emri} lloji={pet.lloji} />) : ""}
            <ul>
            {pet.map(({ id, emri }) => (
                <li key={id}>
                {emri}{' '}
            <button onClick={() => onRemovePet(id)}>Remove</button>
          </li>
        ))}
      </ul>
        </div>
            )     
}

export default Age;