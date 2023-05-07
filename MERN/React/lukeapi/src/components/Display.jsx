import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Display = () => {
  const { select, id } = useParams();
  const [character, setCharacter] = useState({});
  const [planet, setPlanet] = useState({});

  const [homeworld, setHomeworld] = useState({});

  useEffect(() => {
    if (select === "people") {
      axios.get(`https://swapi.dev/api/people/${id}`).then((response) => {
        setCharacter({
          id: response.data.id,
          characterName: response.data.name,
          height: response.data.height,
          hairColor: response.data.hair_color,
          eyeColor: response.data.eye_color,
          skinColor: response.data.skin_color,
          homeworld: axios
            .get(`${response.data.homeworld}`)
            .then((response) => {
              console.log(response , "resp")
              setHomeworld({
                homeworldName: response.data.name,
                homeworldUrl: response.data.url
              });
            }),
        });
      });
    } else {
      axios.get(`https://swapi.dev/api/planets/${id}`).then((response) => {
        setPlanet({
          id: response.data.id,
          planetName: response.data.name,
          climate: response.data.climate,
          terrain: response.data.terrain,
          surfaceWater: response.data.surface_water,
          population: response.data.population,
        });
      });
    }
  }, []);

  
    if (select == "people") {
      return (
        <div>
          <h2>{character.characterName}</h2>
          <ul>
            <li>Height:{character.height}</li>
            <li>Hair Color:{character.hairColor}</li>
            <li>Eye Color:{character.eyeColor}</li>
            <li>Skin Color:{character.skinColor}</li>
            <li><a href={homeworld.homeworldUrl}>HomeWorld:{homeworld.homeworldName}</a></li>
          </ul>
        </div>
      );
    } else{
      return (
        <div>
          <h2>{planet.planetName}</h2>
          <ul>
            <li>Climate:{planet.climate}</li>
            <li>Terrain:{planet.terrain}</li>
            <li>Surface Water:{planet.surfaceWater}</li>
            <li>Population:{planet.population}</li>
          </ul>
      </div>
      )
    }
  
};
export default Display;