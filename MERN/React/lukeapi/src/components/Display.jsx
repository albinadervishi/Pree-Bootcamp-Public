import axios from 'axios';
import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const Display =()=>{
    const {select, id} = useParams();
    const [character, setCharacter] = useState({});

        
    useEffect(() => {
        if (select === "people") {
          axios
            .get(`https://swapi.dev/api/people/${id}`)
            .then((response) => {
              setCharacter({
                id: response.data.id,
                characterName: response.data.name,
                height: response.data.height,
              });
            });
        } else {
          axios
            .get(`https://swapi.dev/api/planets/${id}`)
            .then((response) => {
              setCharacter({
                id: response.data.id,
                characterName: response.data.name,
              });
            });
        }
      }, []);
    
    
    
    return(
        <>
       <h2 >{character.characterName} </h2>
       <ul>
       <li>Height:{character.height}</li>
       </ul>
       
        </>
    )
}
export default Display;