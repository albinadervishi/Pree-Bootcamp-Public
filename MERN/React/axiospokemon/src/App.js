import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
          .then(response => {
              setPokemonList(response.data.results)})
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
}

export default App;
