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



//PARAMS

// import { useParams } from "react-router-dom";
// import React from "react";
// import {
//   BrowserRouter,
//   Link,
//   Routes,
//   Route
// } from "react-router-dom";
    
// const Location = (props) => { 
//   const { city } = useParams();
    
//   return (
//     <h1>Welcome to { city }!</h1>
//   );
// }
    
// function App() {
//   return (
//     <BrowserRouter>
//       <p>
//         <Link to="/location/seattle">Seattle</Link>
//          | 
//         <Link to="/location/chicago">Chicago</Link>
//          | 
//         <Link to="/location/burbank">Burbank</Link>
//       </p>
//       <Routes>
//         <Route path="/location/:city" element={<Location />}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }
    
// export default App;
