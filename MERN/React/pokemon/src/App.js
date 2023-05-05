import React ,{ useEffect, useState }from "react";
import './App.css';


function App() {
  
    const [pokemonList, setPokemonList] = useState([]);
    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(data => {
                setPokemonList(data.results);
            }).catch(err => {
              console.log(err);
          })
    }, []);

return (
    <div className="App">
      {
            pokemonList.map((pokemon, index)=>(
                   <h2 key={index}>{pokemon.name}</h2>
            ))
        }
    </div>
  );
};

export default App;
